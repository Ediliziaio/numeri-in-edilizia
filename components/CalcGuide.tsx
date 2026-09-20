import { Reveal } from "./Reveal";

/* Blocchi editoriali delle pagine calcolatore: esempio svolto riga per riga ed
   errori più comuni. Server component: è testo che deve stare nell'HTML statico,
   perché è quello che porta la pagina a rispondere alle query "come si calcola…". */

export function EsempioSvolto({
  title,
  intro,
  righe,
  risultato,
  children,
}: {
  title: string;
  intro: string;
  righe: { voce: string; calcolo?: string; valore: string }[];
  risultato: { voce: string; valore: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="container-nie pb-10">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900">{title}</h2>
          <p className="mt-4 text-muted leading-relaxed">{intro}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left text-[0.95rem]">
              <caption className="sr-only">{title}</caption>
              <tbody>
                {righe.map((r) => (
                  <tr key={r.voce} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-3.5 font-medium text-navy-900">
                      {r.voce}
                      {r.calcolo && <span className="mt-0.5 block text-xs font-normal text-muted">{r.calcolo}</span>}
                    </th>
                    <td className="px-5 py-3.5 text-right tabular-nums text-navy-900 whitespace-nowrap">{r.valore}</td>
                  </tr>
                ))}
                <tr className="bg-brand-100/50">
                  <th scope="row" className="px-5 py-4 font-bold text-navy-900">{risultato.voce}</th>
                  <td className="px-5 py-4 text-right text-lg font-bold tabular-nums text-brand-700 whitespace-nowrap">{risultato.valore}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {children && <div className="mt-6 space-y-4 text-muted leading-relaxed">{children}</div>}
        </div>
      </Reveal>
    </section>
  );
}

export function ErroriComuni({ title, errori }: { title: string; errori: { t: string; d: string }[] }) {
  return (
    <section className="container-nie pb-12">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900">{title}</h2>
          <ol className="mt-6 space-y-4">
            {errori.map((e, i) => (
              <li key={e.t} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-navy-900">{e.t}</h3>
                  <p className="mt-1.5 text-muted leading-relaxed">{e.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
