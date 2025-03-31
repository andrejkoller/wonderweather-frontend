"use client";

import useTheme from "@/hooks/useTheme";
import { FormControl, MenuItem, Select } from "@mui/material";

const Theme = () => {
  const { theme, setLightTheme, setSunTheme, setSkyTheme, setMoonTheme } =
    useTheme();


  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
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
    <div className="flex flex-col justify-center items-center h-24 w-full">
      <FormControl className="w-full">
        <Select value={theme} label="Theme" onChange={handleThemeChange}>
          <MenuItem value="light-theme">Light</MenuItem>
          <MenuItem value="sun-theme">Sun</MenuItem>
          <MenuItem value="sky-theme">Sky</MenuItem>
          <MenuItem value="moon-theme">Moon</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Theme;
