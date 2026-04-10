import Icon from "../atom/Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Project() {
  const proyectos = [
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
  ];
  return (
    <section className="bg-gray-100 p-3 py-20 dark:bg-slate-800" id="project">
      <div className="flex justify-center bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text p-2 text-3xl font-bold text-transparent">
        <h2>Mis Proyectos</h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border bg-white shadow-xl transition-transform duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-900 ${p.favorito ? "border-cyan-500 shadow-blue-100 dark:shadow-slate-700" : "border-transparent"}`}
          >
            {/* Contenedor de Imagen con Relativo para 'fill' */}
            <div className="relative h-48 w-full">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
                unoptimized={p.img.includes("googleusercontent")}
              />
            </div>

            <div className="relative p-6">
              {p.favorito && (
                <span className="absolute -top-4 right-4 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-slate-900 shadow-sm">
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
                    className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600 uppercase dark:bg-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={p.link}
                  target="_blank"
                  className="text-sm font-bold text-cyan-600 hover:underline"
                >
                  Ver Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  className="text-slate-400 hover:text-slate-900"
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
