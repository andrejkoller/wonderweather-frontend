"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <div className="flex flex-col justify-end items-center h-screen w-full">
      <div className="flex flex-col justify-center items-center mb-18 w-5/6">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-medium mb-4">WonderWeather</h1>
          <p className="text-lg mb-6">
            A weather forecast app displaying current conditions and forecasts,
            providing real-time updates and location-based predictions.
          </p>
        </div>
        <div className="w-full">
          <button className="flex justify-between items-center text-lg py-4 px-5 rounded-2xl w-full">
            Get Started <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
