import React from "react";
import { useWeatherData } from "@/hooks/useWeatherData";

const WeatherCard = ({ city }) => {
  const { weatherData, loading, error } = useWeatherData(city);

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
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
        <div className="flex flex-col justify-center items-center">
          <p className="loc-time-font font-medium">
            {weatherData.location?.localtime}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="cond-text-font font-medium">
            {weatherData.current?.condition?.text}
          </p>
        </div>
      </div>
      <div>
        <p className="cur-temp-font font-bold">
          {weatherData.current?.temp_c}°
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
