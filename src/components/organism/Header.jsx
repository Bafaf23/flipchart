import Logo from "../atom/Logo";
import ThemeButton from "../atom/ThemeButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex md:justify-between">
          <div className="flex gap-3">
            <Link
              href="#hero"
              className="font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300"
            >
              Inicio
            </Link>
            <Link
              href="#education"
              className="font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300"
            >
              Educacion
            </Link>
            <Link
              href="#project"
              className="font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300"
            >
              Proyectos
            </Link>
            <Link
              href="#contac"
              className="font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300"
            >
              Contacto
            </Link>
          </div>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
