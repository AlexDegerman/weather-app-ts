import { useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

interface WeatherData {
  temp_c: number
  condition: {
    text: string
    icon: string
  }
  humidity: number
  wind_kph: number
}

interface ForecastDay {
  date: string
  day: {
    avgtemp_c: number
    condition: {
      text: string
      icon: string
    }
  }
}

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[] | undefined>(undefined)

  const fetchWeather = async (city: string) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`

      const response = await axios.get(url)
      setWeatherData(response.data.current)
      setForecast(response.data.forecast.forestcastday)
    } catch {
      setWeatherData(null)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <p>search bar</p>
      {weatherData && (
        <WeatherCard weather={weatherData} forecast={forecast}/>
      )}
    </div>
  )
}

export default App
