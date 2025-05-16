import { useState } from "react"
import '../styles/SearchBar.css'
import { useAppDispatch } from '../store/hooks'
import { fetchWeatherData } from '../store/weatherSlice'

const SearchBar = () => {
  const [city, setCity] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    if (city.trim() !== "") {
      dispatch(fetchWeatherData(city))
    }
  }

  return (
    <div className="search-bar">
      <input 
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar