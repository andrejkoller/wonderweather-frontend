"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light-theme");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedTheme = localStorage.getItem("theme") || "light-theme";
      setTheme(storedTheme);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme, isClient]);

  const setLightTheme = () => setTheme("light-theme");
  const setSunTheme = () => setTheme("sun-theme");
  const setSkyTheme = () => setTheme("sky-theme");
  const setMoonTheme = () => setTheme("moon-theme");

  return { theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme };
};

export default useTheme;
