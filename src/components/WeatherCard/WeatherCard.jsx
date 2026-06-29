import "./WeatherCard.css"
import sunny from "../../assets/sunny.png";

function WeatherCard ({weatherData}) {
    return (
        <section className="weather-card">
            <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
            <img src={sunny} alt="thousand sunny" className="weather-card__image" />
        </section>
    );
}

export default WeatherCard