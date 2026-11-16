export type CalculationRow = { label: string; value: number; unit: string };
export type CalculationError = { ok: false; message: string };
function decimal(value: string): number | null {
  const text = value.trim();
  if (!/^(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(text)) return null;
  const n = Number(text.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : null;
}
const invalid = (): CalculationError => ({ ok: false, message: "Completa i campi con numeri non negativi. Usa punto o virgola per i decimali, senza separatori delle migliaia." });
export function calculateLabour(input: { lordo: string; oneri: string; extra: string; oreContratto: string; nonProduttive: string }) {
  const values = Object.values(input).map(decimal);
  if (values.some(v => v === null)) return invalid();
  const lordo = decimal(input.lordo)!, oneri = decimal(input.oneri)!, extra = decimal(input.extra)!;
  const oreContratto = decimal(input.oreContratto)!, nonProduttive = decimal(input.nonProduttive)!;
  if (oreContratto <= 0 || nonProduttive >= 100) return { ok: false, message: "Le ore contrattuali devono superare zero e la quota non produttiva deve essere inferiore al 100%." } as CalculationError;
  const costoAziendale = lordo * (1 + oneri / 100) + extra;
  const oreProduttive = oreContratto * (1 - nonProduttive / 100);
  const pagaOraria = lordo / oreContratto, costoTeorico = costoAziendale / oreContratto, costoReale = costoAziendale / oreProduttive;
  const scarto = pagaOraria > 0 ? (costoReale - pagaOraria) / pagaOraria * 100 : null;
  if (![costoAziendale, oreProduttive, pagaOraria, costoTeorico, costoReale, ...(scarto === null ? [] : [scarto])].every(Number.isFinite)) return { ok: false, message: "Valori troppo grandi per il calcolatore: controlla importi e ore." } as CalculationError;
  const rows: CalculationRow[] = [
    { label: "Retribuzione lorda annua", value: lordo, unit: "EUR" },
    { label: "Oneri aggiuntivi sul lordo", value: oneri, unit: "%" },
    { label: "Altri costi annui per persona", value: extra, unit: "EUR" },
    { label: "Ore contrattuali annue", value: oreContratto, unit: "ore" },
    { label: "Quota ore non produttive", value: nonProduttive, unit: "%" },
    { label: "Costo aziendale annuo", value: costoAziendale, unit: "EUR" },
    { label: "Ore produttive annue", value: oreProduttive, unit: "ore" },
    { label: "Costo orario sulle ore produttive", value: costoReale, unit: "EUR/ora" },
  ];
  return { ok: true as const, costoAziendale, oreProduttive, pagaOraria, costoTeorico, costoReale, scarto, rows };
}
export function calculateBreakEven(input: { struttura: string; compenso: string; mdc: string; utile: string }) {
  if (Object.values(input).some(v => decimal(v) === null)) return invalid();
  const struttura = decimal(input.struttura)!, compenso = decimal(input.compenso)!, mdc = decimal(input.mdc)!, utile = decimal(input.utile)!;
  if (mdc <= 0 || mdc > 100) return { ok: false, message: "Il margine di contribuzione deve essere maggiore di zero e non superiore al 100%." } as CalculationError;
  const costiFissi = struttura + compenso, pareggio = costiFissi / (mdc / 100), perUtile = (costiFissi + utile) / (mdc / 100), mensile = pareggio / 12;
  const scenarioMargin = mdc + 2 <= 100 ? mdc + 2 : null;
  const scenarioPareggio = scenarioMargin === null ? null : costiFissi / (scenarioMargin / 100);
  if (![costiFissi, pareggio, perUtile, mensile, ...(scenarioPareggio === null ? [] : [scenarioPareggio])].every(Number.isFinite)) return { ok: false, message: "Valori troppo grandi per il calcolatore: controlla importi e margine." } as CalculationError;
  const rows: CalculationRow[] = [
    { label: "Costi di struttura annui", value: struttura, unit: "EUR" },
    { label: "Compenso annuo aggiuntivo del titolare", value: compenso, unit: "EUR" },
    { label: "Margine di contribuzione medio sui ricavi", value: mdc, unit: "%" },
    { label: "Utile obiettivo prima delle imposte", value: utile, unit: "EUR" },
    { label: "Costi fissi complessivi", value: costiFissi, unit: "EUR" },
    { label: "Fatturato di pareggio annuo", value: pareggio, unit: "EUR" },
    { label: "Fatturato per utile obiettivo", value: perUtile, unit: "EUR" },
  ];
  return { ok: true as const, costiFissi, pareggio, perUtile, mensile, scenarioMargin, scenarioPareggio, rows };
}
/** CSV carries assumptions and results together; numeric values remain machine-readable. */
export function calculationCsv(rows: readonly CalculationRow[]): string {
  const quote = (value: string) => '"' + value.replace(/"/g, '""') + '"';
  return "\ufeff" + [["Voce", "Valore", "Unità"], ...rows.map(r => [r.label, String(r.value).replace(".", ","), r.unit])].map(row => row.map(quote).join(";")).join("\r\n") + "\r\n";
}
