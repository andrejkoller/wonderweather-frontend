"use client";
import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light-theme";
    }
    return "light-theme";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const setLightTheme = () => setTheme("light-theme");
  const setSunTheme = () => setTheme("sun-theme");
  const setSkyTheme = () => setTheme("sky-theme");
  const setMoonTheme = () => setTheme("moon-theme");

  return { theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme };
};

export default useTheme;
