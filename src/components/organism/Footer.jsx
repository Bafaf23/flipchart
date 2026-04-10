import packageJson from "../../../package.json";
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
  const { version } = packageJson;

  return (
    <footer className="flex flex-col border-t border-slate-200/10 bg-slate-950 p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        {/* Lado Izquierdo: Branding */}
        <div className="flex flex-col gap-4">
          <Logo className={"text-slate-200"} />
          <p className="max-w-xs text-sm text-slate-400">
            Construyendo soluciones digitales modernas desde el corazón de
            Venezuela.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
            Contacto & Estado
          </h2>
          <div className="flex flex-col gap-5">
            {infoInterest.map((info, index) => (
              <div key={index} className="group flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-purple-400 ring-1 ring-slate-800 transition-colors group-hover:text-purple-300">
                  <Icon icon={info.icon} />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-200">
                    {info.name}
                  </span>
                  {info.availability && (
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                      <span className="text-[10px] font-bold tracking-tight text-emerald-500 uppercase">
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

      <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800/50 pt-6 md:flex-row">
        <p className="text-[10px] text-slate-500">
          © {new Date().getFullYear()} Braynt Facenda. Todos los derechos
          reservados reservados.
        </p>
        <p className="font-mono text-[10px] tracking-tighter text-slate-600">
          BUILD_REF: <span className="text-slate-400">v{version}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
