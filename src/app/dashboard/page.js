"use client";

import React from "react";
import WeatherCard from "./WeatherCard";
import { useTheme } from "@/hooks/useTheme";
import useFontSize from "@/hooks/useFontSize";

const Dashboard = () => {
  useTheme();
  useFontSize();

  return (
    <div className="dashboard flex flex-start justify-start items-center h-full w-full">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <WeatherCard city="New York" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashboard;
