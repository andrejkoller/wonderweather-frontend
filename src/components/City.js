"use client";

import React from "react";
import { Button, FormControl, Input } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const City = () => {
  const router = useRouter();
  const [cityName, setCityName] = useState("");

  const handleCityName = () => {
    setCityName(cityName);
    localStorage.setItem("cityName", cityName);
    window.dispatchEvent(new Event("storage"));
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <div className="h-full w-full">
        <FormControl className="w-full">
          <Input
            id="cityName"
            type="text"
            name="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
            className="border rounded-md my-2 p-2 w-full"
          />
          <span className="text-sm text-gray-500">
            Type the name of the city you want to search for.
          </span>
        </FormControl>
      </div>
      <div className="button-container mb-8 w-full">
        <Button
          variant="contained"
          className="s-btn w-full"
          onClick={() => handleCityName()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default City;
