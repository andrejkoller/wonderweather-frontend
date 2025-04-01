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
      const dashboardFont = document.querySelectorAll(".font-size-dashboard");
      if (dashboardFont.length > 0) {
        dashboardFont.forEach((dFont) => {
          dFont.classList.remove("text-sm", "text-lg", "text-2xl", "text-3xl");
          switch (fontSize) {
            case "small":
              dFont.classList.add("text-sm");
              break;
            case "medium":
              dFont.classList.add("text-lg");
              break;
            case "large":
              dFont.classList.add("text-2xl", "text-3xl");
              break;
            default:
              break;
          }
        });
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
