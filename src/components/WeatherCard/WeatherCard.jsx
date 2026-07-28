import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";
import { useContext } from "react";
import currentTemperatureUnitContext from "../../contexts/currentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <div className="weather-card__info">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg; {currentTemperatureUnit}
      </div>
      <img src={sunny} alt="thousand sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
