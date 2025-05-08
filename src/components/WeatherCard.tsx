import '../styles/WeatherCard.css'

interface WeatherCardProps {
  weather: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
  }
  forecast: {
    date: string
    day: {
      avgtemp_c: number
      condition: {
        text: string
        icon: string
      }
    }
  }[]
}

const WeatherCard = ({ weather, forecast}: WeatherCardProps) => {

  return (
    <div className="weather-card">
      <div className="main-info">
        <h2>{forecast[0].date}</h2>
        <img src={weather.condition.icon} alt={weather.condition.text}/>
        <p>{weather.temp_c}°C</p>
        <p>Condition: {weather.condition.text}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind: {weather.wind_kph}</p>
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