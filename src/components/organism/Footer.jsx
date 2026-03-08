import packageJson from "../../../package.json";
import Icon from "../atom/Icon";
import Logo from "../atom/Logo";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faLocation,
  faLocationArrow,
  faSadCry,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

// Adjust the path as needed
const Footer = () => {
  const packageInfo = packageJson;

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

  return (
    <footer className="flex flex-col border-t border-slate-200 bg-slate-50 p-6">
      <div className="mx-auto flex w-full max-w-6xl items-start justify-between">
        <div className="py-2">
          <Logo />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
            Info
          </h2>
          <div className="flex flex-col gap-4">
            {infoInterest.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 text-slate-400">
                  <Icon icon={info.icon} />
                </span>
                <div className="flex flex-col">
                  <span
                    className={`text-lg leading-tight ${info.availability ? "font-medium text-slate-700" : "text-slate-500"}`}
                  >
                    {info.name}
                  </span>
                  {info.availability && (
                    <span className="mt-1 w-fit rounded-full bg-pink-50 px-1.5 py-0.5 text-[10px] font-bold text-pink-500 uppercase">
                      Disponible para trabajo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-4">
        <p className="text-center font-mono text-xs text-slate-400">
          v{packageInfo.version}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
