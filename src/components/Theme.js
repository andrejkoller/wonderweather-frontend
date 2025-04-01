"use client";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Theme = () => {
  const { theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme } =
    useTheme();

  const handleThemeChange = (selectedTheme) => {
    switch (selectedTheme) {
      case "light-theme":
        setLightTheme();
        break;
      case "sun-theme":
        setSunTheme();
        break;
      case "sky-theme":
        setSkyTheme();
        break;
      case "moon-theme":
        setMoonTheme();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-3 rounded-b-sm rounded-t-sm p-3 h-24 w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "15px 25px",
          }}
          variant="contained"
          disabled={theme === "light-theme" ? true : false}
          onClick={() => handleThemeChange("light-theme")}
        >
          <BoltIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "15px 25px",
          }}
          variant="contained"
          disabled={theme === "sun-theme" ? true : false}
          onClick={() => handleThemeChange("sun-theme")}
        >
          <SunnyIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "15px 25px",
          }}
          variant="contained"
          disabled={theme === "sky-theme" ? true : false}
          onClick={() => handleThemeChange("sky-theme")}
        >
          <CloudIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "15px 25px",
          }}
          variant="contained"
          disabled={theme === "moon-theme" ? true : false}
          onClick={() => handleThemeChange("moon-theme")}
        >
          <BedtimeIcon />
        </Button>
      </div>
    </div>
  );
};

export default Theme;
