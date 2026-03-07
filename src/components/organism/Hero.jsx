import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 px-6 py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-bold text-purple-700">
            Disponible para proyectos
          </span>

          <h2 className="text-5xl leading-tight font-black text-slate-900 md:text-6xl">
            Diseño y desarrollo <br />
            <span className="text-purple-600">experiencias digitales.</span>
          </h2>

          <p className="max-w-lg text-lg text-slate-600">
            Hola, soy <span className="font-bold text-slate-800">Bryant</span>.
            Desarrollador enfocado en crear soluciones modernas, limpias y
            funcionales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#project"
              className="rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800"
            >
              Ver Proyectos
            </Link>
            <Link
              href="#contac"
              className="rounded-xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition-all hover:border-pink-600 hover:text-pink-600"
            >
              Hablemos
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 aspect-square w-full rotate-3 rounded-3xl bg-purple-600 opacity-10"></div>
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <Image
              src="/heroImg.png"
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
