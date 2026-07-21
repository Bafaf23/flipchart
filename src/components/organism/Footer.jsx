import Icon from "../atom/Icon";
import Logo from "../atom/Logo";
import { faLocationArrow, faTools } from "@fortawesome/free-solid-svg-icons";

const infoInterest = [
  {
    name: "Caracas, Venezuela",
    icon: faLocationArrow,
  },
  {
    name: "Desarrollador Web",
    icon: faTools,
    availability: true,
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-300/40 bg-f3/40 p-8 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        {/* Lado Izquierdo: Branding */}
        <div className="flex flex-col gap-4">
          <Logo className="text-slate-800 dark:text-slate-200" name={true} />
          <p className="max-w-xs text-sm text-slate-600 dark:text-slate-400">
            Construyendo soluciones digitales modernas desde el corazón de
            Venezuela.
          </p>
        </div>

        {/* Lado Derecho: Contacto & Estado */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            Contacto & Estado
          </h2>
          <div className="flex flex-col gap-5">
            {infoInterest.map((info, index) => (
              <div key={index} className="group flex items-center gap-4">
                {/* Iconos adaptados al estilo Esmeralda / Glass */}
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200/60 text-emerald-600 ring-1 ring-slate-300/60 transition-colors group-hover:bg-slate-300/40 dark:bg-slate-900 dark:text-emerald-400 dark:ring-slate-800 dark:group-hover:text-emerald-300">
                  <Icon icon={info.icon} />
                </span>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {info.name}
                  </span>
                  {info.availability && (
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                      <span className="text-[10px] font-bold tracking-tight text-emerald-600 uppercase dark:text-emerald-500">
                        Disponible para nuevos retos
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra Inferior de Créditos */}
      <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-300/60 pt-6 md:flex-row dark:border-slate-800/50">
        <p className="text-[10px] text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Braynt Facenda. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
