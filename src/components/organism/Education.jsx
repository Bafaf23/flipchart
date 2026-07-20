import Icon from "../atom/Icon";
import "animate.css";
import {
  faCss,
  faGit,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPostgresql,
  faPython,
  faReact,
  faSass,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faGraduationCap,
  faN,
  faC,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const hoverStyles = {
    "text-orange-500":
      "hover:border-orange-500/40 dark:hover:border-orange-500/30 hover:bg-orange-500/5",
    "text-purple-500":
      "hover:border-purple-500/40 dark:hover:border-purple-500/30 hover:bg-purple-500/5",
    "text-yellow-500":
      "hover:border-yellow-500/40 dark:hover:border-yellow-500/30 hover:bg-yellow-500/5",
    "text-blue-500":
      "hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:bg-blue-500/5",
    "text-black":
      "hover:border-slate-500/40 dark:hover:border-slate-400/30 hover:bg-slate-500/5 dark:text-slate-100", // Ajuste para Next.js en oscuro
    "text-green-600":
      "hover:border-green-600/40 dark:hover:border-green-600/30 hover:bg-green-600/5",
    "text-cyan-400":
      "hover:border-cyan-400/40 dark:hover:border-cyan-400/30 hover:bg-cyan-400/5",
    "text-pink-500":
      "hover:border-pink-500/40 dark:hover:border-pink-500/30 hover:bg-pink-500/5",
  };

  /**
   * Stack de tecnoligas aprendidas.
   */
  const techStack = [
    //* lenguajes
    { name: "HTML5", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss, color: "text-purple-500" },
    { name: "JavaScript", icon: faJsSquare, color: "text-yellow-500" },
    { name: "Python", icon: faPython, color: "text-blue-500" },

    //* frameworks js
    { name: "React", icon: faReact, color: "text-blue-500" },
    { name: "Next.js", icon: faN, color: "text-black" },
    { name: "Node.js", icon: faNodeJs, color: "text-green-600" },

    //* libreias css
    { name: "Tailwind", icon: faTailwindCss, color: "text-cyan-400" },
    { name: "SASS", icon: faSass, color: "text-pink-500" },

    // * dataBase
    { name: "SQL", icon: faDatabase, color: "text-blue-500" },
    { name: "PostgresSQL", icon: faPostgresql, color: "text-cyan-500" },

    //* otros
    { name: "Cursor", icon: faC, color: "text-black" },
    { name: "GitHub", icon: faGithub, color: "text-gray-500" },
    { name: "Git", icon: faGit, color: "text-orange-600" },
  ];
  return (
    <section className="bg-f3 dark:bg-f4 px-6 py-20" id="education">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center animate__animated animate__bounce">
          <h2 className="text-4xl font-black text-slate-800 dark:text-100">
            Educación y <span className="text-indigo-600">Tecnologías</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {/* Título de la Sección */}
            <div className="flex items-center gap-3">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-slate-100">
                <Icon
                  icon={faGraduationCap}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                Formación
              </h3>
            </div>

            {/* Tarjeta Liquid Glass */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-300/60 bg-white/40 p-6 shadow-lg shadow-slate-950/5 backdrop-blur-md transition-all duration-300 hover:border-pink-500/30 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-2xl dark:shadow-black/20 dark:backdrop-blur-xl dark:hover:border-emerald-400/30">
              {/* Micro reflejo líquido superior en modo oscuro */}
              <div className="absolute top-0 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-white/10 to-transparent dark:block"></div>

              {/* Contenido */}
              <span className="text-sm font-bold text-pink-600 dark:text-emerald-400">
                2025 - 2026
              </span>

              <h4 className="mt-1 text-xl font-black text-slate-900 dark:text-slate-200">
                Desarrollador Full Stack
              </h4>

              <p className="mt-0.5 font-medium text-slate-600 dark:text-slate-400">
                Lexpin Academy
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-100">
              <Icon icon={faCode} />
              Stack Tecnológico
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {techStack.map((tech, index) => {
                // Obtenemos los estilos dinámicos de hover para esta tecnología específica
                const currentHover =
                  hoverStyles[tech.color] ||
                  "hover:border-slate-400 hover:bg-white/80";

                return (
                  <div
                    key={index}
                    className={`group flex flex-col items-center rounded-xl border border-slate-300/60 bg-white/40 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/30 dark:backdrop-blur-md dark:hover:shadow-xl dark:hover:shadow-black/30 ${currentHover}`}
                  >
                    {/* Icono con animación e inversión automática para el logo negro de Next.js en modo oscuro */}
                    <span
                      className={`${tech.color} mb-2 text-3xl transition-transform duration-300 group-hover:scale-110 ${tech.name === "Next.js" ? "dark:text-white" : ""}`}
                    >
                      <Icon icon={tech.icon} />
                    </span>

                    {/* Nombre de la tecnología */}
                    <span className="text-xs font-bold text-slate-700 transition-colors dark:text-slate-300 dark:group-hover:text-slate-100">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
