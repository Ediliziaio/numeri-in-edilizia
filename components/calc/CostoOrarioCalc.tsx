"use client";

import { useState } from "react";
import { CalcField, CalcResult, CalcCard, nf } from "../CalcUI";

import { calculateLabour } from "@/lib/management-calculators";
import { CalculationDownload } from "./CalculationDownload";

/* Calcolatore del costo orario reale della manodopera edile.
   Metodo: costo aziendale annuo ÷ ore realmente produttive. */

export function CostoOrarioCalc() {
  const [lordo, setLordo] = useState("28000");
  const [oneri, setOneri] = useState("45");
  const [extra, setExtra] = useState("1200");
  const [oreContratto, setOreContratto] = useState("1750");
  const [nonProduttive, setNonProduttive] = useState("18");

  const result = calculateLabour({ lordo, oneri, extra, oreContratto, nonProduttive });
  const { costoAziendale, oreProduttive, pagaOraria, costoTeorico, costoReale, scarto } = result.ok ? result : { costoAziendale: 0, oreProduttive: 0, pagaOraria: 0, costoTeorico: 0, costoReale: 0, scarto: null };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <CalcCard title="I tuoi dati">
        <div className="space-y-5">
          <CalcField
            id="lordo"
            label="Retribuzione lorda annua"
            value={lordo}
            onChange={setLordo}
            hint="Il lordo in busta paga della persona, su base annua."
          />
          <CalcField
            id="oneri"
            label="Oneri a carico azienda"
            value={oneri}
            onChange={setOneri}
            suffix="%"
            hint="Solo gli oneri non già inclusi nel lordo annuo: chiedi il dato al consulente del lavoro, evitando doppi conteggi."
          />
          <CalcField
            id="extra"
            label="Altri costi annui per persona"
            value={extra}
            onChange={setExtra}
            hint="DPI, vestiario, formazione obbligatoria, sorveglianza sanitaria, utensili."
          />
          <CalcField
            id="ore-contratto"
            label="Ore contrattuali annue"
            value={oreContratto}
            onChange={setOreContratto}
            suffix="ore"
            hint="Le ore teoriche da contratto, prima di ferie e assenze."
          />
          <CalcField
            id="non-produttive"
            label="Ore non produttive"
            value={nonProduttive}
            onChange={setNonProduttive}
            suffix="%"
            hint="Quota ricavata dai dati della persona e del periodo: ferie, assenze e attività non attribuite alle lavorazioni. Nessuna percentuale standard."
          />
        </div>
      </CalcCard>

      <div className="space-y-4" aria-live="polite">
        {result.ok ? <>
        <CalcResult
          label="Costo orario reale"
          value={`${nf(costoReale, 2)} €/ora`}
          tone="highlight"
          hint="È il numero da usare nei preventivi: costo aziendale diviso le ore realmente produttive."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult
            label="Paga oraria nominale"
            value={`${nf(pagaOraria, 2)} €`}
            hint="Il lordo diviso le ore da contratto. È il numero che inganna."
          />
          <CalcResult
            label="Costo su ore teoriche"
            value={`${nf(costoTeorico, 2)} €`}
            hint="Costo aziendale sulle ore contrattuali: già più alto, ma ancora ottimistico."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcResult label="Costo aziendale annuo" value={`${nf(costoAziendale)} €`} />
          <CalcResult label="Ore produttive annue" value={`${nf(oreProduttive)} ore`} />
        </div>
        <div className="rounded-2xl border-2 border-brand-300 bg-brand-100/40 p-5">
          <p className="text-sm text-navy-900 leading-relaxed">
            {scarto !== null && scarto > 0 ? (
              <>
                Il costo orario reale è <strong>{nf(scarto)}% più alto</strong> della paga oraria.
                Se nei preventivi usi la paga oraria, stai sottostimando la voce più pesante del
                lavoro su ogni commessa.
              </>
            ) : (
              <>Inserisci i tuoi dati per vedere lo scarto tra paga oraria e costo reale.</>
            )}
          </p>
        </div>
        <CalculationDownload rows={result.rows} filename="costo-orario-manodopera.csv" />
        </> : <p role="status" className="rounded-2xl border border-line bg-bg-soft p-5 text-navy-900">{result.message}</p>}
      </div>
    </div>
  );
}
