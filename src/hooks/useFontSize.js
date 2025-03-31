"use client";

import { useEffect, useState } from "react";

const useFontSize = () => {
  const [fontSize, setFontSize] = useState("small");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedFontSize = localStorage.getItem("fontSize") || "small";
      setFontSize(storedFontSize);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      const dashboardFont = document.querySelector(".dashboard");
      if (dashboardFont) {
        dashboardFont.style.fontSize =
          fontSize === "small"
            ? "0.8em"
            : fontSize === "medium"
            ? "1em"
            : fontSize === "large"
            ? "1.2em"
            : "1em";
      }
      localStorage.setItem("fontSize", fontSize);
    }
  }, [fontSize, isClient]);

  const setSmallFontSize = () => setFontSize("small");
  const setMediumFontSize = () => setFontSize("medium");
  const setLargeFontSize = () => setFontSize("large");

  return [fontSize, setSmallFontSize, setMediumFontSize, setLargeFontSize];
};

export default useFontSize;
