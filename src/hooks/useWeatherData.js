import { fetchCurrentWeather } from "@/app/api/weather";
import { useState, useEffect } from "react";

export const useWeatherData = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      try {
        const data = await fetchCurrentWeather(city);
        setWeatherData(data);
        console.log("Fetched data:", data);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      getWeatherData();
    }
  }, [city]);

  return { weatherData, loading, error };
};
