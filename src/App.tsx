import './App.css'
import { useEffect } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { hideNotification } from "./store/weatherSlice"

const App = () => {
  const { weatherData, showNotification } = useAppSelector(state => state.weather)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        dispatch(hideNotification())
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [showNotification, dispatch])

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar />
      {showNotification && (
        <div className="notification">
          <p>Could not fetch weather data</p>
          <p>Please check the city name</p>
        </div>
      )}
      {weatherData && (
        <WeatherCard />
      )}
    </div>
  )
}

export default App