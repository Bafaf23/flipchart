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
    <section
      className="bg-slate-50 px-6 py-20 text-slate-900 dark:bg-slate-800"
      id="contac"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 bg-linear-to-r from-yellow-600 via-green-600 to-blue-600 bg-clip-text text-4xl font-black text-transparent">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mb-12 text-lg font-medium text-slate-600 dark:text-slate-300">
          Estoy disponible para nuevas oportunidades y colaboraciones en{" "}
          <span className="font-bold text-slate-900 dark:text-slate-500">
            SIGACE
          </span>{" "}
          o cualquier idea digital.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 inline-block rounded-2xl bg-slate-100 p-4 transition-colors group-hover:bg-white dark:bg-slate-600 dark:group-hover:bg-slate-300">
                <span className={`${social.color} text-2xl`}>
                  <Icon icon={social.icon} />
                </span>
              </div>
              <h3 className="mb-1 text-xl font-bold text-slate-800 dark:text-slate-200">
                {social.name}
              </h3>
              <p className="text-sm font-semibold text-slate-500">
                {social.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-700">
          <h3 className="mb-2 text-2xl font-black text-slate-900 dark:text-slate-100">
            Hablemos por correo
          </h3>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            ¿Prefieres algo más formal? Envíame un mensaje directo y te
            responderé pronto.
          </p>
          <a
            href="mailto:bryantffacen@gmail.com"
            className="inline-block rounded-2xl bg-slate-900 px-12 py-4 font-bold text-white shadow-lg shadow-slate-300 transition-all hover:bg-cyan-600 dark:bg-slate-700 dark:shadow-slate-600"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
