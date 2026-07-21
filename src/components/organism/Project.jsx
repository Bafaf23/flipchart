import Icon from "../atom/Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Project() {
  const project = [
    {
      title: "Instagram Clone",
      img: "https://www.trecebits.com/wp-content/uploads/2022/05/Instagram-nuevo-logo.jpg.webp",
      desc: "Réplica de la red social enfocada en estilos y maquetación.",
      tags: ["SASS", "HTML"],
      link: "https://bafaf23.github.io/clone-instagram/",
      repo: "https://github.com/Bafaf23/clone-instagram",
      favorito: false,
    },
    {
      title: "YouTube Clone",
      img: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
      desc: "Proyecto ambicioso para profundizar en el manejo de CSS puro.",
      tags: ["CSS", "HTML"],
      link: "https://bafaf23.github.io/youtube-proyec/",
      repo: "https://github.com/Bafaf23/youtube-proyec",
      favorito: false,
    },
    {
      title: "Juego piedra, papel o tijera",
      img: "/juegoppt.jpeg",
      desc: "Juego desarrollado con JS que busca profundicar mis conocimientos en el lenjuage",
      tags: ["Talwindcss", "HTML", "JavaScript"],
      link: "https://bafaf23.github.io/mini-juego_js-PPT/",
      repo: "https://github.com/Bafaf23/mini-juego_js-PPT",
      favorito: false,
    },
    {
      title: "RBO, la mejor forma de organizar tus finanzas",
      img: "/RBO.jpeg",
      desc: "Poryecto de app web financiera. Desarrollado con JS valina.",
      tags: ["SASS", "HTML", "JavaScript"],
      link: "https://github.com/Bafaf23/RBO",
      repo: "https://github.com/Bafaf23/RBO",
      favorito: true,
    },
    {
      title: "Attakon titan, page character",
      img: "/attackontitan.jpg",
      desc: "Pagina donde consultar info de los personajes de attakon titan.",
      tags: ["Next.js", "HTML", "JavaScript", "React"],
      link: "https://attakontitan.vercel.app/",
      repo: "https://github.com/Bafaf23/attakontitan",
      favorito: false,
    },
    {
      title: "ORDER",
      img: "/order3.png",
      desc: "Herramineta web diseñada para automatizar la gestión de inventarios y la generación de órdenes de compra a partir del procesamiento de archivos de hojas de cálculo (Excel/CSV).",
      tags: ["Talwindcss", "Flask", "Python"],
      link: "https://order-production-a07a.up.railway.app/",
      repo: "https://github.com/Bafaf23/order",
      favorito: true,
    },
  ];
  return (
    <section className="bg-f3 p-3 py-20 dark:bg-f4" id="project">
      <div className="flex justify-center p-2 text-4xl font-black dark:text-100 text-slate-800">
        <h2>Mis Proyectos</h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {project.map((p, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/40 ${
              p.favorito
                ? "border-cyan-500 shadow-cyan-500/10 dark:shadow-cyan-400/5"
                : "border-slate-300/60 dark:border-slate-800/80 shadow-black/5 dark:shadow-black/40"
            }`}
          >
            {/* Parte Superior: Imagen e Información */}
            <div>
              {/* Contenedor de Imagen con parche de hidratación */}
              <div
                className="relative h-48 w-full overflow-hidden"
                suppressHydrationWarning
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized={p.img.includes("googleusercontent")}
                  priority={index < 2}
                />
              </div>

              <div className="relative p-6 pb-0">
                {p.favorito && (
                  <span className="absolute -top-4 right-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-3 py-1 text-xs font-black text-slate-900 shadow-md">
                    ⭐ Destacado
                  </span>
                )}

                <h3 className="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {p.title}
                </h3>

                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  {p.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-200/60 px-3 py-1 text-[10px] font-bold uppercase text-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Parte Inferior: Botones de Acción (Siempre alineados abajo) */}
            <div className="p-6 pt-4">
              <div className="flex items-center justify-between gap-4">
                {/* Botón Demo Estilo Esmeralda */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-slate-950/10 transition-all hover:bg-slate-800 dark:bg-emerald-600 dark:text-slate-950 dark:shadow-emerald-950/20 dark:hover:bg-emerald-500"
                >
                  Ver Demo
                </a>

                {/* Botón GitHub Estilo Glass */}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/50 text-xl text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  title="Ver Repositorio"
                >
                  <Icon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
