import Icon from "../atom/Icon";
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
  faSquareLastfm,
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
    <section className="bg-white px-6 py-20 dark:bg-slate-800" id="education">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-slate-200">
            Educación y <span className="text-indigo-600">Tecnologías</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-700 dark:text-slate-100">
                <Icon icon={faGraduationCap} /> Formación
              </h3>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <span className="text-sm font-bold text-indigo-600">
                2025 - 2026
              </span>
              <h4 className="text-xl font-black text-slate-900 dark:text-slate-400">
                Desarrollador Full Stack
              </h4>
              <p className="text-slate-600">Lexpin Academy</p>
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-700 dark:text-slate-100">
              <Icon icon={faCode} />
              Stack Tecnológico
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-600 dark:bg-slate-900 dark:hover:shadow-slate-500"
                >
                  <span className={`${tech.color} mb-2 text-3xl`}>
                    <Icon icon={tech.icon} />
                  </span>

                  <span className="text-xs font-bold text-slate-700 dark:text-slate-100">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
