export function DashboardMock() {
  const bars = [38, 52, 46, 64, 58, 78, 72, 90];
  return (
    <div className="relative">
      {/* card principale */}
      <div className="relative rounded-[1.75rem] border border-line bg-white shadow-card p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Margine di commessa</p>
            <p className="mt-1 font-display text-2xl font-bold text-navy-900">Cantiere Via Roma</p>
          </div>
          <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
            +14,2%
          </span>
        </div>

        {/* grafico a barre */}
        <div className="mt-7 flex h-40 items-end gap-2.5">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <div
                className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-navy-900" : "bg-brand-400"}`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[0.7rem] text-muted">
          <span>Gen</span><span>Feb</span><span>Mar</span><span>Apr</span>
          <span>Mag</span><span>Giu</span><span>Lug</span><span>Ago</span>
        </div>

        {/* righe KPI */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { l: "Ricavi", v: "€ 480k" },
            { l: "Costi cantiere", v: "€ 340k" },
            { l: "Margine", v: "€ 68k" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl bg-bg-soft p-3">
              <p className="text-[0.7rem] text-muted">{k.l}</p>
              <p className="mt-1 font-display font-bold text-navy-900">{k.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* card flottante utile */}
      <div className="absolute top-[46%] -left-5 sm:-left-9 hidden sm:block rounded-2xl bg-navy-900 px-5 py-4 shadow-card">
        <p className="text-[0.7rem] uppercase tracking-wider text-brand-300">Utile netto anno</p>
        <p className="mt-1 font-serif text-2xl font-semibold text-white">+ 32%</p>
      </div>

      {/* alone decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-brand-400/25 blur-2xl"
      />
    </div>
  );
}
