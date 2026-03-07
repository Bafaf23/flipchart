import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-600 p-1">
            <span className="font-bold text-white">DEV</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            BRYANT
          </h1>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#hero"
            className="font-medium text-slate-600 transition-colors hover:text-cyan-600"
          >
            Inicio
          </Link>
          <Link
            href="#education"
            className="font-medium text-slate-600 transition-colors hover:text-cyan-600"
          >
            Educacion
          </Link>
          <Link
            href="#project"
            className="font-medium text-slate-600 transition-colors hover:text-cyan-600"
          >
            Poryecto
          </Link>
          <Link
            href="#contac"
            className="font-medium text-slate-600 transition-colors hover:text-cyan-600"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
