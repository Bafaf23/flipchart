import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 px-6 py-10 dark:from-gray-700 dark:to-slate-800">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative z-10 space-y-6">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-bold text-purple-700 dark:bg-purple-300/70">
            Disponible para proyectos
          </span>

          <h2 className="text-5xl leading-tight font-black text-slate-900 md:text-6xl dark:text-slate-200">
            Diseño y desarrollo <br />
            <span className="text-purple-600 dark:text-pink-500">
              experiencias digitales.
            </span>
          </h2>

          <p className="max-w-lg text-lg text-slate-600 dark:text-slate-300">
            Hola, soy{" "}
            <span className="font-bold text-slate-800 dark:text-slate-100">
              Bryant
            </span>
            . Desarrollador enfocado en crear soluciones modernas, limpias y
            funcionales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#project"
              className="rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 dark:shadow-slate-700"
            >
              Ver Proyectos
            </Link>
            <Link
              href="#contac"
              className="rounded-xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition-all hover:border-pink-600 hover:text-pink-600 dark:text-slate-100"
            >
              Hablemos
            </Link>
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
            {/* Llaves { } - Azul suave */}
            <div className="absolute top-[5%] left-[-5%] animate-bounce opacity-20 [animation-duration:5s]">
              <span className="font-mono text-4xl text-blue-500/40 dark:text-blue-400/30">
                {"{ }"}
              </span>
            </div>

            {/* Tags < /> - Púrpura elegante */}
            <div className="absolute top-[0%] right-[10%] animate-bounce opacity-20 [animation-duration:7s]">
              <span className="font-mono text-5xl text-purple-500/50 dark:text-purple-400/40">
                {"< />"}
              </span>
            </div>

            {/* H1 Hello Word - Texto técnico */}
            <div className="absolute top-[40%] right-[-5%] rotate-12 animate-bounce opacity-20 [animation-duration:7s]">
              <span className="font-mono text-2xl text-purple-500/50 dark:text-indigo-400/30">
                {"<h1>Hello, world<h1/>"}
              </span>
            </div>

            {/* Brackets [ ] - Naranja sutil */}
            <div className="absolute bottom-[-5%] left-[40%] animate-bounce opacity-15 [animation-duration:6s]">
              <span className="font-mono text-3xl text-orange-600/60 dark:text-orange-400/30">
                {"[ ]"}
              </span>
            </div>

            {/* La "B" de Bryant - Rosa/Pink */}
            <div className="absolute bottom-[30%] left-[90%] rotate-10 animate-bounce opacity-15 [animation-duration:6s]">
              <span className="font-mono text-3xl text-pink-600/60 dark:text-pink-400/40">
                {"B"}
              </span>
            </div>

            {/* Punto y coma ; - Verde Neón */}
            <div className="absolute top-[75%] left-[55%] animate-bounce opacity-20 [animation-duration:8s]">
              <span className="font-mono text-6xl text-green-500/80 dark:text-emerald-500/40">
                ;
              </span>
            </div>

            {/* Cierre </ > - Gris neutro */}
            <div className="absolute right-[20%] bottom-[10%] animate-bounce opacity-10 [animation-duration:9s]">
              <span className="font-mono text-4xl text-gray-600/70 dark:text-slate-500/20">
                {"</ >"}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 aspect-square w-full rotate-3 rounded-3xl bg-orange-600 opacity-10"></div>
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-600 dark:bg-slate-900">
            <Image
              src="/hero2.png"
              fill
              className="object-cover"
              alt="BryantFacenda"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
