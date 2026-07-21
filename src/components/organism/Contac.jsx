import Icon from "../atom/Icon";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contac() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      color: "text-green-600",
      link: "https://wa.me/584241736193",
      value: "+58 424 173 6193",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      color: "text-pink-600",
      link: "https://www.instagram.com/bafaf03/",
      value: "@bafaf03",
    },
    {
      name: "GitHub",
      icon: faGithub,
      color: "text-slate-800",
      link: "https://github.com/Bafaf23",
      value: "Bafaf23",
    },
    {
      name: "LinkendIn",
      icon: faLinkedin,
      color: "text-blue-800",
      link: "https://www.linkedin.com/in/bryant-facenda-a078ab279/",
      value: "Bryant Facenda",
    },
  ];
  return (
    <section className="bg-f3 px-6 py-20 text-slate-900 dark:bg-f4" id="contac">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-black dark:text-100 text-slate-800">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mb-12 text-lg font-medium text-slate-600 dark:text-300">
          Estoy disponible para nuevas oportunidades y colaboraciones en{" "}
          <span className="font-bold text-slate-900 dark:text-green-500">
            SIGACE
          </span>{" "}
          o cualquier idea digital.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {socialLinks.map((social, index) => (
            <a
              data-aos="fade-up"
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-3xl border border-slate-300/60 bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/80 hover:shadow-xl hover:shadow-slate-950/5 dark:border-slate-800/80 dark:bg-slate-900/30 dark:backdrop-blur-xl dark:hover:border-emerald-400/30 dark:hover:bg-slate-900/60 dark:hover:shadow-black/30"
            >
              <div className="absolute top-0 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-white/10 to-transparent dark:block"></div>

              {/* Contenedor del Icono */}
              <div className="mb-4 inline-block w-fit rounded-2xl bg-slate-200/60 p-4 transition-colors group-hover:bg-white dark:bg-slate-800/50 dark:group-hover:bg-slate-800">
                <span
                  className={`${social.color} text-2xl transition-transform duration-300 group-hover:scale-110 block`}
                >
                  <Icon icon={social.icon} />
                </span>
              </div>

              {/* Nombre de la Red Social */}
              <h3 className="mb-1 text-xl font-bold text-slate-800 transition-colors dark:text-slate-200 dark:group-hover:text-slate-100">
                {social.name}
              </h3>

              {/* Usuario / Enlace visible */}
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {social.value}
              </p>
            </a>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-slate-300/60 bg-white/40 p-10 shadow-2xl shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/30 dark:shadow-black/40">
          {/* Micro reflejo líquido superior en modo oscuro */}
          <div className="absolute top-0 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-white/20 to-transparent dark:block"></div>

          {/* Contenido */}
          <h3 className="mb-2 text-2xl font-black text-slate-900 dark:text-slate-100">
            Hablemos por correo
          </h3>

          <p className="mb-8 text-slate-600 dark:text-slate-400">
            ¿Prefieres algo más formal? Envíame un mensaje directo y te
            responderé pronto.
          </p>

          {/* Botón de Acción Estilo Esmeralda */}
          <a
            href="mailto:bryantffacen@gmail.com"
            className="inline-block rounded-2xl bg-slate-900 px-12 py-4 font-bold text-white shadow-xl shadow-slate-950/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-600 dark:text-slate-950 dark:shadow-emerald-950/20 dark:hover:bg-emerald-500"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
