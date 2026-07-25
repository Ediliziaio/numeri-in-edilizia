"use client";

import { useState } from "react";
import { CalcField, CalcResult, CalcCard, nf, toNum } from "../CalcUI";

/* Calcolatore del margine di commessa: ricavi − costi diretti − quota di struttura. */

export function MargineCommessaCalc() {
  const [ricavi, setRicavi] = useState("120000");
  const [materiali, setMateriali] = useState("45000");
  const [manodopera, setManodopera] = useState("30000");
  const [mezzi, setMezzi] = useState("8000");
  const [subappalti, setSubappalti] = useState("15000");
  const [altri, setAltri] = useState("3000");
  const [struttura, setStruttura] = useState("15");

  const costiDiretti =
    toNum(materiali) + toNum(manodopera) + toNum(mezzi) + toNum(subappalti) + toNum(altri);
  const contribuzione = toNum(ricavi) - costiDiretti;
  const pctContribuzione = toNum(ricavi) > 0 ? (contribuzione / toNum(ricavi)) * 100 : 0;
  const quotaStruttura = costiDiretti * (toNum(struttura) / 100);
  const margine = contribuzione - quotaStruttura;
  const pctMargine = toNum(ricavi) > 0 ? (margine / toNum(ricavi)) * 100 : 0;

  const verdetto =
    pctMargine < 0
      ? { t: "Commessa in perdita", d: "Con questi numeri il cantiere erode utile invece di produrne. Va rivisto il prezzo o la struttura dei costi." }
      : pctMargine < 10
      ? { t: "Zona fragile", d: "Sotto il 10% un solo imprevisto porta la commessa in perdita. Poco spazio per sbagliare." }
      : pctMargine <= 15
      ? { t: "Equilibrio", d: "L'impresa copre struttura e compenso e lascia utile. È l'intervallo di una commessa sana." }
      : { t: "Commessa solida", d: "Oltre il 15% c'è spazio per investire, assorbire imprevisti e crescere." };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <CalcCard title="I numeri della commessa">
        <div className="space-y-5">
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
            hint="Quota di sede, amministrazione e compenso titolare da caricare. Nelle PMI edili tipicamente 10-20% dei costi diretti."
          />
        </div>
      </CalcCard>

      <div className="space-y-4">
        <CalcResult
          label="Margine di commessa"
          value={`${nf(margine)} €  ·  ${nf(pctMargine, 1)}%`}
          tone="highlight"
          hint="Quello che resta davvero del cantiere, struttura inclusa."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult label="Totale costi diretti" value={`${nf(costiDiretti)} €`} />
          <CalcResult label="Quota di struttura" value={`${nf(quotaStruttura)} €`} />
        </div>
        <CalcResult
          label="Margine di contribuzione"
          value={`${nf(contribuzione)} €  ·  ${nf(pctContribuzione, 1)}%`}
          hint="Prima dei costi fissi: quanto questo cantiere contribuisce a coprire la struttura."
        />
        <div className="rounded-2xl border-2 border-brand-300 bg-brand-100/40 p-5">
          <p className="font-display font-bold text-navy-900">{verdetto.t}</p>
          <p className="mt-1.5 text-sm text-navy-900/80 leading-relaxed">{verdetto.d}</p>
        </div>
      </div>
    </div>
  );
}
