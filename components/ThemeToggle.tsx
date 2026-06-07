"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    const initial: Theme = stored ?? (document.documentElement.dataset.theme as Theme) ?? "dark";
    apply(initial);
    setTheme(initial);
  }, []);

  const apply = (t: Theme) => {
    document.documentElement.dataset.theme = t;
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", t);
  };

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    apply(next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative w-14 h-7 rounded-full border hairline flex items-center px-1 transition-colors"
      style={{ backgroundColor: "rgb(var(--bone) / 0.08)" }}
    >
      <span
        className="absolute w-5 h-5 rounded-full bg-bone transition-transform duration-500 ease-out shadow-md"
        style={{ transform: `translateX(${isDark ? 0 : 26}px)` }}
      />
      <span className="ml-0.5 text-[11px] leading-none w-5 h-5 flex items-center justify-center opacity-70">
        {isDark ? "☾" : ""}
      </span>
      <span className="ml-auto text-[11px] leading-none w-5 h-5 flex items-center justify-center opacity-70">
        {isDark ? "" : "☀"}
      </span>
    </button>
  );
}
