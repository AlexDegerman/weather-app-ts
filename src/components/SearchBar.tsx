import { useState } from "react"
import '../styles/SearchBar.css'

interface SearchBarProps {
  onSearch: (city: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState<string>("")

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city)
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