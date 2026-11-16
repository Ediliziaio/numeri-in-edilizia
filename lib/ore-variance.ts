export type OreInputs = { budgetHours: string; budgetQuantity: string; completedQuantity: string; actualHours: string };
export type OreResult = { ok: false; message: string } | { ok: true; equivalentHours: number; differenceHours: number; percentage: number | null };

function decimal(value: string): number | null {
  const text = value.trim();
  if (!/^(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(text)) return null;
  const number = Number(text.replace(",", "."));
  return Number.isFinite(number) && number >= 0 ? number : null;
}

/** Descriptive comparison for the same homogeneous activity and observation date. */
export function calculateOre(input: OreInputs): OreResult {
  const bh = decimal(input.budgetHours), bq = decimal(input.budgetQuantity);
  const cq = decimal(input.completedQuantity), ah = decimal(input.actualHours);
  if (bh === null || bq === null || cq === null || ah === null) return { ok: false, message: "Completa i quattro campi con numeri non negativi. Usa punto o virgola per i decimali, senza separatori delle migliaia." };
  if (bq === 0) return { ok: false, message: "La quantità di budget deve essere maggiore di zero per definire la proporzione." };
  const equivalentHours = bh / bq * cq;
  const differenceHours = ah - equivalentHours;
  const percentage = equivalentHours > 0 ? differenceHours / equivalentHours * 100 : null;
  if (![equivalentHours, differenceHours, ...(percentage === null ? [] : [percentage])].every(Number.isFinite)) return { ok: false, message: "I valori sono troppo grandi per un confronto attendibile nel calcolatore." };
  return { ok: true, equivalentHours, differenceHours, percentage };
}
