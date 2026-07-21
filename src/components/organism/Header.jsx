import Logo from "../atom/Logo";
import ThemeButton from "../atom/ThemeButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-end md:justify-center sticky top-0 z-50">
      {/* Contenedor con Efecto Liquid Glass */}
      <div className="absolute top-5 z-50 md:w-11/12 max-w-2xl rounded-full border border-white/20 bg-white/10 px-6 py-4 shadow-xl shadow-black/5 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-slate-950/40 dark:shadow-2xl dark:shadow-black/50 dark:backdrop-blur-xl dark:backdrop-brightness-70">
        <div className="absolute top-0 right-10 left-10 hidden h-px bg-linear-to-r from-transparent via-white/20 to-transparent dark:block"></div>

        <div className="mx-auto flex items-center justify-between gap-5">
          <Logo />
          <nav className="hidden items-center md:flex md:justify-between">
            <div className="flex gap-4">
              <Link
                href="#hero"
                className="font-medium text-slate-900 transition-colors hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                Inicio
              </Link>
              <Link
                href="#education"
                className="font-medium text-slate-900 transition-colors hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                Educación
              </Link>
              <Link
                href="#project"
                className="font-medium text-slate-900 transition-colors hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className="font-medium text-slate-900 transition-colors hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                Contacto
              </Link>
            </div>
          </nav>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
