"use client";

import { useState } from "react";
import { CalcField, CalcResult, CalcCard, nf, toNum } from "../CalcUI";

/* Break even point: quanto devi fatturare per coprire i costi fissi
   e per raggiungere l'utile obiettivo, dato il margine di contribuzione medio. */

export function BreakEvenCalc() {
  const [struttura, setStruttura] = useState("180000");
  const [compenso, setCompenso] = useState("60000");
  const [mdc, setMdc] = useState("22");
  const [utile, setUtile] = useState("50000");

  const costiFissi = toNum(struttura) + toNum(compenso);
  const pctMdc = toNum(mdc);
  const valido = pctMdc > 0;

  const pareggio = valido ? costiFissi / (pctMdc / 100) : 0;
  const perUtile = valido ? (costiFissi + toNum(utile)) / (pctMdc / 100) : 0;
  const mensile = pareggio / 12;

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
            hint="Il tuo stipendio annuo: è un costo da mettere a budget, non l'avanzo di fine anno."
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
            hint="Quanto vuoi che resti all'impresa oltre al tuo compenso."
          />
        </div>
      </CalcCard>

      <div className="space-y-4">
        <CalcResult
          label="Fatturato di pareggio"
          value={valido ? `${nf(pareggio)} €` : "—"}
          tone="highlight"
          hint="Sotto questa cifra l'impresa lavora in perdita, anche con i cantieri pieni."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult label="Costi fissi da coprire" value={`${nf(costiFissi)} €`} hint="Struttura più il tuo compenso." />
          <CalcResult label="Pareggio mensile" value={valido ? `${nf(mensile)} €` : "—"} hint="Il ritmo di produzione che devi tenere ogni mese." />
        </div>
        <CalcResult
          label="Fatturato per l'utile obiettivo"
          value={valido ? `${nf(perUtile)} €` : "—"}
          hint="Quanto serve fatturare, a questo margine, per portare a casa anche l'utile che hai deciso."
        />
        <div className="rounded-2xl border-2 border-brand-300 bg-brand-100/40 p-5">
          <p className="text-sm text-navy-900 leading-relaxed">
            {valido ? (
              <>
                Alzare il margine di contribuzione anche di <strong>2 punti</strong> abbassa il
                fatturato di pareggio a{" "}
                <strong>{nf(costiFissi / ((pctMdc + 2) / 100))} €</strong>: guadagni lo stesso
                lavorando meno, invece di rincorrere volume.
              </>
            ) : (
              <>Inserisci un margine di contribuzione maggiore di zero per vedere il calcolo.</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
