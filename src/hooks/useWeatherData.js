import { fetchCurrentWeather } from "@/app/api/weather";
import { useState, useEffect } from "react";

export const useWeatherData = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCityName = localStorage.getItem("cityName") || "London";
      if (storedCityName) {
        setCityName(storedCityName);
      }
    }
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      try {
        const data = await fetchCurrentWeather(cityName);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    if (cityName) {
      getWeatherData();
    }
  }, [cityName]);

  return { cityName, weatherData, loading, error };
};
