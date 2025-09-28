import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherReports from './components/WeatherReports'
import ForcastCard from './components/ForcastCard'

function App() {
  const [city,setCity] = useState("London")
  const [searchCity, setSearchCity] = useState("London")

  const handleSearch = () =>{
    setCity(city);
  }
  console.log(city);
  

  return (
    <>
      <div className='w-full h-screen bg-gradient-to-br from-blue-600 to purple-850'>
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch}/>
        <WeatherReports city={city}/>
      </div>
    </>
  )
}

export default App
