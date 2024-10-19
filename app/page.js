"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";

const Weather = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [data, setData] = useState("");

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          console.log("Updated location:", { lat: latitude, lon: longitude });
        },
        (error) => {
          console.log("Error getting location:", error.message);
          alert("Failed to retrieve location");
        }
      );
    } else {
      console.log("Geolocation not supported");
      alert("Geolocation is not supported by your browser");
    }
  };
  
  const getWeather = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric
`
    );
    let data = response.data;
    console.log(data);
    setData(data);
  };
  
  const fetchWeatherByLocation = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );
      setData(response.data); // Update state with the fetched weather data
    } catch (_) {
      alert('Location not found, please try again');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      getWeather(location.lat, location.lon);
    }
  }, [location]);
  console.log('API Key:', process.env.REACT_APP_API_KEY);
  return <div>
  <Header fetch={fetchWeatherByLocation} getLocation={getLocation}/>
  {data ? <Card props={data} /> : <p className="font-bold text-center m-36">Loading weather data...</p>}</div>;
};

export default Weather;
