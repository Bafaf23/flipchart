"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Icon from "./Icon";
import { faMonero } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSoap, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="font-medium text-slate-800 hover:text-zinc-500 dark:text-slate-100 cursor-pointer text-xl hover:-rotate-45 transition-all hover:dark:text-amber-400"
    >
      {theme == "light" ? <Icon icon={faMoon} /> : <Icon icon={faSun} />}
    </button>
  );
}
