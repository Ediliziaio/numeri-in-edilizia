import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-nie py-32 text-center">
      <div className="stat-num text-7xl">404</div>
      <h1 className="mt-6 text-3xl font-bold">Pagina non trovata</h1>
      <p className="mt-4 text-muted">La pagina che cerchi non esiste o è stata spostata.</p>
      <Link href="/" className="btn btn-primary mt-8">Torna alla home</Link>
    </section>
  );
}
