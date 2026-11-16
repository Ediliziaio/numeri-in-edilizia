"use client";

import { useState } from "react";
import { CalcField, CalcResult, CalcCard, nf } from "../CalcUI";

import { calculateBreakEven } from "@/lib/management-calculators";
import { CalculationDownload } from "./CalculationDownload";

/* Break even point: quanto devi fatturare per coprire i costi fissi
   e per raggiungere l'utile obiettivo, dato il margine di contribuzione medio. */

export function BreakEvenCalc() {
  const [struttura, setStruttura] = useState("180000");
  const [compenso, setCompenso] = useState("60000");
  const [mdc, setMdc] = useState("22");
  const [utile, setUtile] = useState("50000");

  const result = calculateBreakEven({ struttura, compenso, mdc, utile });
  const { costiFissi, pareggio, perUtile, mensile } = result.ok ? result : { costiFissi: 0, pareggio: 0, perUtile: 0, mensile: 0 };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <CalcCard title="La struttura della tua impresa">
        <div className="space-y-5">
          <CalcField
            id="struttura"
            label="Costi di struttura annui"
            value={struttura}
            onChange={setStruttura}
            hint="Sede, amministrazione, assicurazioni, consulenti, mezzi aziendali: tutto ciò che esce comunque."
          />
          <CalcField
            id="compenso"
            label="Compenso dell'imprenditore"
            value={compenso}
            onChange={setCompenso}
            hint="Importo gestionale annuo: inserisci solo la quota non già compresa nei costi di struttura."
          />
          <CalcField
            id="mdc"
            label="Margine di contribuzione medio"
            value={mdc}
            onChange={setMdc}
            suffix="%"
            hint="Percentuale media che resta dei ricavi dopo i soli costi diretti di cantiere."
          />
          <CalcField
            id="utile"
            label="Utile obiettivo (facoltativo)"
            value={utile}
            onChange={setUtile}
            hint="Risultato gestionale obiettivo prima delle imposte. Inserisci zero se vuoi solo il pareggio."
          />
        </div>
      </CalcCard>

      <div className="space-y-4" aria-live="polite">
        {result.ok ? <>
        <CalcResult
          label="Fatturato di pareggio"
          value={result.ok ? `${nf(pareggio)} €` : "—"}
          tone="highlight"
          hint="Sotto questa cifra l'impresa lavora in perdita, anche con i cantieri pieni."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult label="Costi fissi da coprire" value={`${nf(costiFissi)} €`} hint="Struttura più il tuo compenso." />
          <CalcResult label="Pareggio mensile" value={result.ok ? `${nf(mensile)} €` : "—"} hint="Il ritmo di produzione che devi tenere ogni mese." />
        </div>
        <CalcResult
          label="Fatturato per l'utile obiettivo"
          value={result.ok ? `${nf(perUtile)} €` : "—"}
          hint="Quanto serve fatturare, a questo margine, per portare a casa anche l'utile che hai deciso."
        />
        <div className="rounded-2xl border-2 border-brand-300 bg-brand-100/40 p-5">
          <p className="text-sm text-navy-900 leading-relaxed">
            {result.scenarioPareggio !== null ? (
              <>
                A parità di altri dati, aumentare il margine di contribuzione anche di <strong>2 punti</strong> abbassa il
                fatturato di pareggio a{" "}
                <strong>{nf(result.scenarioPareggio!)} €</strong>. È una simulazione: nella realtà possono cambiare mix dei lavori, prezzi e costi.
              </>
            ) : (
              <>Il confronto di due punti aggiuntivi non viene mostrato quando supererebbe il 100%.</>
            )}
          </p>
        </div>
        <CalculationDownload rows={result.rows} filename="punto-pareggio-impresa-edile.csv" />
        </> : <p role="status" className="rounded-2xl border border-line bg-bg-soft p-5 text-navy-900">{result.message}</p>}
      </div>
    </div>
  );
}
