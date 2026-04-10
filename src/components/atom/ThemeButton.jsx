"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="rounded-2xl p-1 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {theme == "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}
