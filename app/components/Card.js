import React from "react";

const Card = ({ props }) => {
  const weatherImages = {
    906: "/wind.png", //Windy
    800: "/sun.png", // Clear sky
    801: "/clouds.png", // Few clouds
    802: "/clouds.png", // Scattered clouds
    803: "/clouds.png", // Broken clouds
    804: "/clouds.png", // Overcast clouds
    500: "/rain.png", // Light rain
    501: "/rain.png", // Moderate rain
    502: "/rain.png", // Heavy rain
    600: "/snow.png", // Light snow
    601: "/snow.png", // Moderate snow
    602: "/snow.png", // Heavy snow
    701: "/haze.png", // Mist
    721: "/haze.png", // Haze
    741: "/haze.png", // Fog
    200: "/thunderstorm.png", // Thunderstorm
  };

  const weatherId = props.weather[0].id;

  const weatherImage = weatherImages[weatherId] || `https://openweathermap.org/img/wn/${props.weather[0].icon}.png`; // Default image if not found
  
  return (
    <div className="m-12 flex justify-between">
      <div className="rounded-3xl bg-white flex flex-none flex-col p-4 mr-10 text-3xl font-bold items-center  border-black border-2">
        <h1 className="pb-5">{props.name}</h1>
        <img src={weatherImage} alt={props.weather[0].main} className="h-60 px-6"/>
      </div>
      <div className="rounded-3xl bg-white p-4 text-3xl font-bold border-black border-2 flex-grow flex flex-wrap justify-center items-center">
        <p className="w-1/2 text-center ">Weather: {props.weather[0].main}</p>
        <p className="w-1/2 text-center">Temperature: {props.main.temp} C</p>
        <p className="w-1/2 text-center">Humidity: {props.main.humidity}</p>
        <p className="w-1/2 text-center">Wind: {props.wind.speed}</p>
      </div>
    </div>
  );
};

export default Card;
