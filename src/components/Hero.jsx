import { useState, useEffect } from 'react'
import { WiDaySunny, WiRain, WiCloudy, WiStrongWind, WiHumidity, WiDayCloudy, WiSnow } from 'react-icons/wi'
import { FiSearch, FiMapPin } from 'react-icons/fi'

const Hero = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [forecast, setForecast] = useState([])

  // API Keys (in production, store these in environment variables)
  const API_KEY = '731ac37818a79a1a667baae36290cfb1' // Replace with your actual API key
  const BASE_URL = 'https://api.openweathermap.org/data/2.5'
  
  // Enhanced weather icons mapping
  const weatherIcons = {
    '01d': <WiDaySunny className="text-yellow-400 text-4xl" />,
    '01n': <WiDaySunny className="text-yellow-200 text-4xl" />,
    '02d': <WiDayCloudy className="text-yellow-300 text-4xl" />,
    '02n': <WiDayCloudy className="text-gray-300 text-4xl" />,
    '03d': <WiCloudy className="text-gray-400 text-4xl" />,
    '03n': <WiCloudy className="text-gray-400 text-4xl" />,
    '04d': <WiCloudy className="text-gray-500 text-4xl" />,
    '04n': <WiCloudy className="text-gray-500 text-4xl" />,
    '09d': <WiRain className="text-blue-400 text-4xl" />,
    '09n': <WiRain className="text-blue-400 text-4xl" />,
    '10d': <WiRain className="text-blue-500 text-4xl" />,
    '10n': <WiRain className="text-blue-500 text-4xl" />,
    '11d': <WiRain className="text-purple-500 text-4xl" />,
    '11n': <WiRain className="text-purple-500 text-4xl" />,
    '13d': <WiSnow className="text-blue-200 text-4xl" />,
    '13n': <WiSnow className="text-blue-200 text-4xl" />,
    '50d': <WiCloudy className="text-gray-300 text-4xl" />,
    '50n': <WiCloudy className="text-gray-300 text-4xl" />,
  }

  // Fetch current weather data
  const fetchCurrentWeather = async (loc) => {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${loc}&appid=${API_KEY}&units=metric`
      )
      if (!response.ok) {
        throw new Error('Location not found')
      }
      return await response.json()
    } catch (err) {
      throw err
    }
  }

  // Fetch 5-day forecast
  const fetchForecast = async (lat, lon) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=5`
      )
      if (!response.ok) {
        throw new Error('Forecast data unavailable')
      }
      return await response.json()
    } catch (err) {
      throw err
    }
  }

  // Main weather fetch function
  const fetchWeather = async (loc) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // Fetch current weather
      const currentData = await fetchCurrentWeather(loc)
      
      // Fetch forecast using coordinates from current weather
      const forecastData = await fetchForecast(currentData.coord.lat, currentData.coord.lon)
      
      // Process current weather data
      const processedCurrent = {
        name: currentData.name,
        main: {
          temp: Math.round(currentData.main.temp),
          humidity: currentData.main.humidity,
          feels_like: Math.round(currentData.main.feels_like),
          pressure: currentData.main.pressure,
        },
        weather: currentData.weather[0],
        wind: {
          speed: currentData.wind.speed.toFixed(1),
          deg: currentData.wind.deg,
        },
        visibility: (currentData.visibility / 1000).toFixed(1),
        sys: {
          sunrise: currentData.sys.sunrise,
          sunset: currentData.sys.sunset,
        },
        dt: currentData.dt,
      }

      // Process forecast data
      const processedForecast = forecastData.list.map(item => ({
        date: new Date(item.dt * 1000),
        temp: {
          max: Math.round(item.main.temp_max),
          min: Math.round(item.main.temp_min),
        },
        weather: item.weather[0],
        humidity: item.main.humidity,
      }))

      setWeatherData(processedCurrent)
      setForecast(processedForecast)
    } catch (err) {
      setError(err.message || "Failed to fetch weather data")
      console.error("Weather fetch error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Fetch default weather for a farming location on component mount
    fetchWeather('Nairobi') // Default location - change as needed
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.trim()) {
      fetchWeather(location)
    }
  }

  // Format time from timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <section className="relative bg-gradient-to-br from-green-800 to-blue-900 text-white py-16 md:py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/farm-pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-green-500/10 rounded-full filter blur-lg"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full filter blur-lg"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Hero Content */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-block bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm mb-2">
              <p className="text-sm font-medium">Agricultural Weather Intelligence</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-yellow-300">Precision</span> Farming <br />
              Powered by <span className="text-yellow-300">Weather</span> Data
            </h1>
            
            <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl">
              Get real-time weather insights tailored for agriculture to optimize your farming operations,
              irrigation schedules, and crop management.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30">
                Get Started
              </button>
              <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-white hover:bg-white hover:text-green-800 font-bold rounded-lg transition-all shadow-lg hover:shadow-white/20">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-4">
              {[
                { value: "Live", label: "Weather Data" },
                { value: "5-Day", label: "Forecast" },
                { value: "Global", label: "Coverage" },
                { value: "Farm", label: "Recommendations" },
                { value: "24/7", label: "Updates" },
                { value: "Free", label: "Service" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 p-3 md:p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs md:text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Weather Widget */}
          <div className="lg:w-1/2 w-full max-w-md xl:max-w-lg">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:border-white/30 transition-all">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FiMapPin className="text-yellow-400" />
                  Farm Weather Center
                </h2>
                <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  Live Data
                </div>
              </div>
              
              {/* Search Form */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search location..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70"
                  />
                  <FiSearch className="absolute left-3 top-3.5 text-white/70" />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? '...' : 'Go'}
                  </button>
                </div>
              </form>
              
              {error && (
                <div className="bg-red-500/30 border border-red-500 text-red-100 p-3 rounded-lg mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}
              
              {/* Current Weather */}
              {weatherData && (
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        {weatherData.name}
                        <span className="text-sm font-normal opacity-80">
                          {new Date(weatherData.dt * 1000).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </h3>
                      <p className="text-lg capitalize flex items-center gap-2">
                        {weatherIcons[weatherData.weather.icon] || weatherIcons['01d']}
                        {weatherData.weather.description}
                      </p>
                    </div>
                    <div className="text-5xl font-bold text-right">
                      {weatherData.main.temp}°C
                      <p className="text-sm font-normal opacity-80">
                        Feels like {weatherData.main.feels_like}°C
                      </p>
                    </div>
                  </div>
                  
                  {/* Weather Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 p-3 rounded-xl text-center">
                      <div className="flex justify-center">
                        <WiHumidity className="text-3xl text-blue-300" />
                      </div>
                      <p className="text-sm opacity-80 mt-1">Humidity</p>
                      <p className="text-xl font-bold">{weatherData.main.humidity}%</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl text-center">
                      <div className="flex justify-center">
                        <WiStrongWind className="text-3xl text-gray-300" />
                      </div>
                      <p className="text-sm opacity-80 mt-1">Wind</p>
                      <p className="text-xl font-bold">{weatherData.wind.speed} km/h</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl text-center">
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-80 mt-1">Visibility</p>
                      <p className="text-xl font-bold">{weatherData.visibility} km</p>
                    </div>
                  </div>
                  
                  {/* Sunrise/Sunset */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <p className="text-sm opacity-80">Sunrise</p>
                      <p className="text-lg font-medium">
                        {formatTime(weatherData.sys.sunrise)}
                      </p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl">
                      <p className="text-sm opacity-80">Sunset</p>
                      <p className="text-lg font-medium">
                        {formatTime(weatherData.sys.sunset)}
                      </p>
                    </div>
                  </div>
                  
                  {/* 5-Day Forecast */}
                  <div className="pt-4">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      5-Day Forecast
                    </h4>
                    <div className="grid grid-cols-5 gap-2">
                      {forecast.map((day, index) => (
                        <div key={index} className="bg-white/5 p-2 rounded-lg text-center">
                          <p className="text-xs font-medium">
                            {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </p>
                          <div className="my-1 flex justify-center">
                            {weatherIcons[day.weather.icon] || weatherIcons['01d']}
                          </div>
                          <p className="text-sm font-bold">{day.temp.max}°</p>
                          <p className="text-xs opacity-70">{day.temp.min}°</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Farming Recommendation */}
                  <div className="pt-4">
                    <div className="bg-green-900/30 border border-green-800/50 p-3 rounded-lg">
                      <p className="text-sm font-medium flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>
                          {weatherData.weather.main === 'Clear' 
                            ? "Excellent weather for outdoor farming activities. Ideal for planting, harvesting, and field work." 
                            : weatherData.weather.main === 'Rain' 
                              ? "Consider indoor activities like equipment maintenance. Good time for water conservation planning." 
                              : weatherData.weather.main === 'Clouds'
                                ? "Good conditions for most farming operations. Monitor for potential rain."
                                : "Check specific recommendations for current weather conditions."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero