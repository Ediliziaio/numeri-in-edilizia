"use client";

import { useState } from "react";
import { CalcField, CalcResult, CalcCard, nf } from "../CalcUI";

import { calculateMargin, marginCsv } from "@/lib/margine";

/* Calcolatore del margine di commessa: ricavi − costi diretti − quota di struttura. */

export function MargineCommessaCalc() {
  const [ricavi, setRicavi] = useState("120000");
  const [materiali, setMateriali] = useState("45000");
  const [manodopera, setManodopera] = useState("30000");
  const [mezzi, setMezzi] = useState("8000");
  const [subappalti, setSubappalti] = useState("15000");
  const [altri, setAltri] = useState("3000");
  const [struttura, setStruttura] = useState("15");

  const input = { ricavi, materiali, manodopera, mezzi, subappalti, altri, struttura };
  const result = calculateMargin(input);
  const costiDiretti = result?.costiDiretti ?? NaN;
  const contribuzione = result?.primaStruttura ?? NaN;
  const quotaStruttura = result?.quotaStruttura ?? NaN;
  const margine = result?.margine ?? NaN;
  const pct = (n: number | null | undefined) => n == null ? "percentuale non calcolabile" : `${nf(n, 1)}%`;
  const verdetto = !result
    ? { t: "Completa i dati della commessa", d: "Usa importi validi maggiori o uguali a zero. Un campo vuoto non viene considerato un costo pari a zero." }
    : result.margine < 0
    ? { t: "Saldo negativo", d: "I ricavi inseriti non coprono i costi diretti e la quota di struttura. Controlla dati e ipotesi del preventivo." }
    : result.margine === 0
    ? { t: "Saldo pari a zero", d: "Con queste ipotesi ricavi e costi considerati si equivalgono. Eventuali costi non inclusi cambiano il risultato." }
    : { t: "Saldo positivo", d: "Resta un margine dopo i costi considerati. Non basta da solo a giudicare la commessa: valuta anche rischi, costi esclusi e tempi di incasso." };
  function download() {
    const csv = marginCsv(input); if (!csv) return;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a"); a.href=url; a.download="margine-commessa-numeri-in-edilizia.csv"; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <CalcCard title="I numeri della commessa">
        <div className="space-y-5">
          <p className="text-sm text-muted">Valori iniziali di esempio: sostituiscili con dati della tua commessa, al netto dell’IVA. I dati del calcolatore non vengono inviati né salvati.</p>
          <CalcField
            id="ricavi"
            label="Ricavi della commessa"
            value={ricavi}
            onChange={setRicavi}
            hint="Importo di contratto più le varianti già concordate e fatturabili."
          />
          <CalcField id="materiali" label="Materiali" value={materiali} onChange={setMateriali} hint="Incluso lo sfrido: lo scarto è comprato e pagato." />
          <CalcField
            id="manodopera"
            label="Manodopera"
            value={manodopera}
            onChange={setManodopera}
            hint="Ore impiegate al costo orario reale, non alla paga oraria."
          />
          <CalcField id="mezzi" label="Mezzi e noli" value={mezzi} onChange={setMezzi} />
          <CalcField id="subappalti" label="Subappalti" value={subappalti} onChange={setSubappalti} />
          <CalcField id="altri" label="Altri costi diretti" value={altri} onChange={setAltri} hint="Trasporti, smaltimenti, oneri di sicurezza specifici." />
          <CalcField
            id="struttura"
            label="Incidenza costi di struttura"
            value={struttura}
            onChange={setStruttura}
            suffix="%"
            hint="Incidenza da calcolare sui dati della tua impresa. Il 15% iniziale è solo un esempio modificabile."
          />
        </div>
      </CalcCard>

      <div className="space-y-4">
        <CalcResult
          label="Margine di commessa"
          value={`${nf(margine)} €  ·  ${pct(result?.pctMargine)}`}
          tone="highlight"
          hint="Saldo dopo costi diretti e quota di struttura: non coincide con utile netto o cassa disponibile."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult label="Totale costi diretti" value={`${nf(costiDiretti)} €`} />
          <CalcResult label="Quota di struttura" value={`${nf(quotaStruttura)} €`} />
        </div>
        <CalcResult
          label="Margine prima della struttura"
          value={`${nf(contribuzione)} €  ·  ${pct(result?.pctPrimaStruttura)}`}
          hint="Ricavi meno costi diretti inseriti; coincide con il margine di contribuzione solo se tali costi sono variabili."
        />
        <div className="rounded-2xl border-2 border-brand-300 bg-brand-100/40 p-5">
          <p role="status" className="font-display font-bold text-navy-900">{verdetto.t}</p>
          <p className="mt-1.5 text-sm text-navy-900/80 leading-relaxed">{verdetto.d}</p>
        </div>
        <button type="button" onClick={download} disabled={!result} className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">Scarica il riepilogo CSV</button>
        <p className="text-xs text-muted">Il file contiene ipotesi e risultati. Con ricavi pari a zero le percentuali non sono calcolabili.</p>
      </div>
    </div>
  );
}
