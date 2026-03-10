import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 px-6 py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative z-10 space-y-6">
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
          <div className="pointer-events-none absolute inset-0 -z-10 select-none">
            <div className="absolute top-[5%] left-[-5%] animate-bounce opacity-20 [animation-duration:5s]">
              <span className="font-mono text-4xl text-blue-500/40">
                {"{ }"}
              </span>
            </div>

            <div className="absolute top-[0%] right-[10%] animate-bounce opacity-20 [animation-duration:7s]">
              <span className="font-mono text-5xl text-purple-500/50">
                {"< />"}
              </span>
            </div>
            <div className="absolute top-[40%] right-[-5%] rotate-12 animate-bounce opacity-20 [animation-duration:7s]">
              <span className="font-mono text-2xl text-purple-500/50">
                {"<h1>Hello, word<h1/>"}
              </span>
            </div>

            <div className="absolute bottom-[-5%] left-[40%] animate-bounce opacity-15 [animation-duration:6s]">
              <span className="font-mono text-3xl text-orange-600">
                {"[ ]"}
              </span>
            </div>
            <div className="absolute bottom-[30%] left-[90%] rotate-10 animate-bounce opacity-15 [animation-duration:6s]">
              <span className="font-mono text-3xl text-pink-600">{"B"}</span>
            </div>

            <div className="absolute top-[75%] left-[55%] animate-bounce opacity-20 [animation-duration:8s]">
              <span className="font-mono text-6xl text-green-500/80">;</span>
            </div>

            <div className="absolute right-[20%] bottom-[10%] animate-bounce opacity-10 [animation-duration:9s]">
              <span className="font-mono text-4xl text-gray-600/70">
                {"</ >"}
              </span>
            </div>
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
