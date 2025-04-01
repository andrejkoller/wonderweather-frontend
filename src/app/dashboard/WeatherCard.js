import React from "react";
import { useWeatherData } from "@/hooks/useWeatherData";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WeatherCard = () => {
  const { weatherData, loading, error } = useWeatherData();

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
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
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
      <div className="mr-5">
        <p className="cur-temp-font font-medium">
          <span className="temp-numb">{weatherData.current?.temp_c}</span>
          <span className="degree">°</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 h-full w-full">
        <p className="text-xl font-bold">Daily Summary</p>
        <p className="text-lg">
          Now it feels like{" "}
          {weatherData.current?.feelslike_c >= 0 && <span>+</span>}
          {weatherData.current?.feelslike_c < 0 && <span>-</span>}
          {weatherData.current?.feelslike_c}°, actually{" "}
          {weatherData.current?.temp_c >= 0 && <span>+</span>}
          {weatherData.current?.temp_c < 0 && <span>-</span>}
          {weatherData.current?.temp_c}°. It feels{" "}
          {weatherData.current?.temp_c > 25 && <span>hot</span>}{" "}
          {weatherData.current?.temp_c >= 15 &&
            weatherData.current?.temp_c <= 25 && <span>mild</span>}{" "}
          {weatherData.current?.temp_c < 15 && <span>cold</span>} because of the
          current season.
        </p>
      </div>
      <div className="asp-card flex flex-row justify-between items-center mt-6 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <AirIcon />
            <p className="text-lg">{weatherData.current?.wind_kph}</p>
          </div>
          <p className="text-sm">Wind</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <WaterDropIcon />
            <p className="text-lg">{weatherData.current?.humidity}</p>
          </div>
          <p className="text-sm">Humidity</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <VisibilityIcon />
            <p className="text-lg">{weatherData.current?.vis_km}</p>
          </div>
          <p className="text-sm">Visibility</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WeatherCard;
