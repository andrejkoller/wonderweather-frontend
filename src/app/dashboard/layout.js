"use client";

import Header from "@/components/Header";
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  useTheme();
  const [cityName, setCityName] = useState("New York");

  useEffect(() => {
    const storedCityName = localStorage.getItem("cityName") || "New York";
    setCityName(storedCityName);

    const handleStorageChange = () => {
      const updatedCityName = localStorage.getItem("cityName") || "New York";
      setCityName(updatedCityName);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <div className="header">
        <Header cityName={cityName} />
      </div>
      <div className="d-body">{children}</div>
    </div>
  );
};

export default Layout;
