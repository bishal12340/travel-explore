const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Mock data for fallback when API key is missing
const mockWeather = {
  main: { temp: 22, feels_like: 24, humidity: 60 },
  weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
  wind: { speed: 3.5 }
};

export const fetchWeatherByCoords = async (lat, lon) => {
  if (!OPENWEATHER_API_KEY) {
    console.warn('OpenWeather API key missing, using mock weather data.');
    return new Promise(resolve => setTimeout(() => resolve(mockWeather), 500));
  }

  try {
    const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`);
    if (!response.ok) throw new Error('Weather fetch failed');
    return await response.json();
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
};

export const fetchWeatherByCity = async (city) => {
  if (!OPENWEATHER_API_KEY) {
    console.warn('OpenWeather API key missing, using mock weather data.');
    return new Promise(resolve => setTimeout(() => resolve(mockWeather), 500));
  }

  try {
    const response = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_API_KEY}`);
    if (!response.ok) throw new Error('Weather fetch failed');
    return await response.json();
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
};
