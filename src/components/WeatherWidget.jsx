import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
      const CITY = 'Bengaluru';
      
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (weatherCode) => {
    if (weatherCode >= 200 && weatherCode < 300) return faCloudRain;
    if (weatherCode >= 300 && weatherCode < 600) return faCloudRain;
    if (weatherCode >= 600 && weatherCode < 700) return faSnowflake;
    if (weatherCode >= 700 && weatherCode < 800) return faCloud;
    if (weatherCode === 800) return faSun;
    return faCloud;
  };

  if (loading) return <div className="weather-widget">Loading weather data...</div>;
  if (error) return <div className="weather-widget">{error}</div>;

  return (
    <div className="weather-widget bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Weather in Bengaluru</h3>
      <div className="flex items-center">
        <FontAwesomeIcon 
          icon={getWeatherIcon(weatherData.weather[0].id)} 
          className="text-3xl mr-3 text-blue-500"
        />
        <div>
          <p className="text-2xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
          <p className="text-sm text-gray-600">{weatherData.weather[0].description}</p>
        </div>
      </div>
      <div className="mt-2">
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherWidget;