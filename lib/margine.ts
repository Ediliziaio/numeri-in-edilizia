export type MarginInputs = { ricavi: string; materiali: string; manodopera: string; mezzi: string; subappalti: string; altri: string; struttura: string };
export function parseAmount(value: string): number | null {
  if (!value.trim()) return null;
  const n = Number(value.trim().replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? n : null;
}
export function calculateMargin(input: MarginInputs) {
  const parsed = Object.fromEntries(Object.entries(input).map(([key,value]) => [key,parseAmount(value)]));
  if (Object.values(parsed).some(v => v === null)) return null;
  const v = parsed as Record<keyof MarginInputs,number>;
  const costiDiretti = v.materiali + v.manodopera + v.mezzi + v.subappalti + v.altri;
  const primaStruttura = v.ricavi - costiDiretti;
  const quotaStruttura = costiDiretti * v.struttura / 100;
  const margine = primaStruttura - quotaStruttura;
  if (![costiDiretti,primaStruttura,quotaStruttura,margine].every(Number.isFinite)) return null;
  const pctPrimaStruttura = v.ricavi > 0 ? primaStruttura / v.ricavi * 100 : null;
  const pctMargine = v.ricavi > 0 ? margine / v.ricavi * 100 : null;
  if ([pctPrimaStruttura,pctMargine].some(n => n !== null && !Number.isFinite(n))) return null;
  return { values:v, costiDiretti, primaStruttura, quotaStruttura, margine, pctPrimaStruttura, pctMargine };
}
export function marginCsv(input: MarginInputs): string | null {
  const r=calculateMargin(input);if(!r)return null;
  const rows: (string|number)[][] = [
    ['Voce','Valore','Unita'],['Ricavi',r.values.ricavi,'EUR'],['Materiali',r.values.materiali,'EUR'],['Manodopera',r.values.manodopera,'EUR'],['Mezzi e noli',r.values.mezzi,'EUR'],['Subappalti',r.values.subappalti,'EUR'],['Altri costi diretti',r.values.altri,'EUR'],['Incidenza struttura',r.values.struttura,'% dei costi diretti'],['Totale costi diretti',r.costiDiretti,'EUR'],['Margine prima della struttura',r.primaStruttura,'EUR'],['Quota struttura',r.quotaStruttura,'EUR'],['Margine di commessa',r.margine,'EUR'],['Margine sui ricavi',r.pctMargine ?? 'Non calcolabile con ricavi zero','%'],['Nota','Simulazione su dati inseriti, valori coerenti al netto IVA. Non rappresenta utile netto o disponibilita di cassa.','']
  ];
  return '\uFEFF'+rows.map(row=>row.map(v=>'"'+(typeof v==='number'?String(v).replace('.',','):v).replace(/"/g,'""')+'"').join(';')).join('\r\n');
}
