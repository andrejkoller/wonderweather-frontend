const API_KEY = "25b6395828b6446e905203112252602";
const BASE_URL_CURRENT = "https://api.weatherapi.com/v1/current.json";

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL_CURRENT}?key=${API_KEY}&q=${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch weather data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
