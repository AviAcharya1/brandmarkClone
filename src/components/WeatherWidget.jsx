import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiWindy } from 'react-icons/wi';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [searchedCity, setSearchedCity] = useState('Bangalore');

  
  const API_KEY =import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetchWeather(searchedCity);
  }, [searchedCity]);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const [currentWeather, forecast] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
      ]);

      setWeatherData(currentWeather.data);
      setForecastData(forecast.data.list.slice(0, 8));
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch weather data. Please check the city name and try again.');
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchedCity(city.trim());
    }
  };

  const getWeatherIcon = (weatherCode) => {
    if (weatherCode >= 200 && weatherCode < 300) return WiRain;
    if (weatherCode >= 300 && weatherCode < 600) return WiRain;
    if (weatherCode >= 600 && weatherCode < 700) return WiSnow;
    if (weatherCode >= 700 && weatherCode < 800) return WiWindy;
    if (weatherCode === 800) return WiDaySunny;
    return WiCloudy;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="weather-widget bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded-lg shadow-lg text-white max-w-md mx-auto"
    >
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full p-2 rounded text-black"
        />
        <button type="submit" className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            Loading weather data...
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-red-200 mb-4"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {weatherData && (
        <>
          <h3 className="text-2xl font-bold mb-4">Weather in {weatherData.name}</h3>
          <div className="flex items-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-6xl mr-4"
            >
              {React.createElement(getWeatherIcon(weatherData.weather[0].id))}
            </motion.div>
            <div>
              <p className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
              <p className="text-xl">{weatherData.weather[0].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="text-sm">Humidity</p>
              <p className="text-lg font-semibold">{weatherData.main.humidity}%</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="text-sm">Wind</p>
              <p className="text-lg font-semibold">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
          <h4 className="text-xl font-semibold mb-3">24-Hour Forecast</h4>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {forecastData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center bg-white bg-opacity-20 p-3 rounded"
                >
                  <p className="text-sm">{new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  {React.createElement(getWeatherIcon(item.weather[0].id), { className: "text-3xl my-2" })}
                  <p className="text-lg font-semibold">{Math.round(item.main.temp)}°C</p>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WeatherWidget;