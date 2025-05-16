import '../styles/WeatherCard.css'
import { useAppSelector } from '../store/hooks'

const WeatherCard = () => {
  const { weatherData, forecast } = useAppSelector(state => state.weather)

  if (!weatherData || forecast.length === 0) {
    return null
  }

  return (
    <div className="weather-card">
      <div className="main-info">
        <h2>{forecast[0].date}</h2>
        <img src={weatherData.condition.icon} alt={weatherData.condition.text}/>
        <p>{weatherData.temp_c}°C</p>
        <p>Condition: {weatherData.condition.text}</p>
        <p>Humidity: {weatherData.humidity}</p>
        <p>Wind: {weatherData.wind_kph} kph</p>
      </div>
      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text}/>
            <p>{day.day.avgtemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherCard