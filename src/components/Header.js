"use client";

import React from "react";
import { useWeatherData } from "@/hooks/useWeatherData";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

const Header = ({ city }) => {
  const { weatherData, loading, error } = useWeatherData(city);
  const pathname = usePathname();

  const handleMenuOpenClick = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("open");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="flex flex-row">
      <div className="menu h-screen w-full">
        <Menu />
      </div>
      <div className="flex flex-col justify-between items-center h-24 w-full">
        <div className="flex flex-row justify-between items-center h-full w-full">
          <div
            id="menuIcon"
            className="flex flex-row justify-start items-center cursor-pointer"
            onClick={handleMenuOpenClick}
          >
            <MenuIcon />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="loc-name-font font-bold">
              {pathname === "/dashboard" && weatherData?.location?.name}
            </h2>
          </div>
          <div
            id="pathNameIcon"
            className="flex flex-row justify-start items-center cursor-pointer"
          >
            {pathname === "/dashboard" && <LocationOnIcon />}
            {pathname === "/dashboard/settings" && <DisplaySettingsIcon />}
            {pathname === "/dashboard/system-settings" && (
              <AppSettingsAltIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
