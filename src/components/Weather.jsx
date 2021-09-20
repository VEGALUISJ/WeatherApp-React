import React from "react";

const Weather = ({ result }) => {
  //destructuring data in result(this is the api)
  const { name, main } = result;

  //const for kelvin temperature to centigrades
  const kelvin = 273.15;

  if (!name) return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The Weather in {name} is:</h2>
        <p>
          {parseFloat(((main.temp - kelvin) * 9) / 5 + 32).toFixed(0)}{" "}
          <span>&deg;F</span>
        </p>
        <p>
          Max Temperature:
          {parseFloat(((main.temp_max - kelvin) * 9) / 5 + 32).toFixed(0)}{" "}
          <span>&deg;F</span>
        </p>
        <p>
          Min Temperature:
          {parseFloat(((main.temp_min - kelvin) * 9) / 5 + 32).toFixed(0)}{" "}
          <span>&deg;F</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
