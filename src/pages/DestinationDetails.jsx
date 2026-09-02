import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { destinations } from '../data/destinations';
import { fetchImage } from '../services/imageApi';
import { fetchWeatherByCoords } from '../services/weatherApi';
import { MapPin, ArrowLeft, Cloud, Thermometer, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const destination = destinations.find(d => d.id === destinationId);
  
  const [heroImage, setHeroImage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [placesImages, setPlacesImages] = useState({});

  useEffect(() => {
    if (destination) {
      // Fetch hero image
      fetchImage(`${destination.name} ${destination.country} landscape`).then(setHeroImage);
      
      // Fetch weather
      fetchWeatherByCoords(destination.coordinates.lat, destination.coordinates.lon)
        .then(setWeather)
        .catch(console.error);
        
      // Fetch places images
      const loadPlacesImages = async () => {
        const images = {};
        await Promise.all(
          destination.famousPlaces.map(async (place) => {
            const imgUrl = await fetchImage(place.imageKeyword);
            images[place.id] = imgUrl;
          })
        );
        setPlacesImages(images);
      };
      loadPlacesImages();
    }
  }, [destination]);

  if (!destination) {
    return (
      <div className="pt-24 min-h-screen text-center">
        <h1 className="text-3xl font-bold text-slate-800">Destination not found</h1>
        <Link to="/explore" className="text-sky-500 mt-4 inline-block">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-slate-900 overflow-hidden">
        {heroImage && (
          <img 
            src={heroImage} 
            alt={destination.name} 
            className="w-full h-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="absolute top-24 left-4 sm:left-8">
          <Link to="/explore" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full inline-flex items-center justify-center transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 max-w-7xl mx-auto md:px-8">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center text-sky-400 mb-2 font-medium">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{destination.country}</span>
              <span className="mx-2">•</span>
              <span>{destination.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow">{destination.name}</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About {destination.name}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{destination.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Famous Places</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.famousPlaces.map((place) => (
                  <div key={place.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="h-48 bg-slate-200">
                      <img 
                        src={placesImages[place.id] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'} 
                        alt={place.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-1">{place.type}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{place.name}</h3>
                      <p className="text-slate-600 text-sm">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-0"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center relative z-10">
                <Cloud className="w-6 h-6 mr-2 text-sky-500" />
                Current Weather
              </h3>
              
              {weather ? (
                <div className="relative z-10">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-5xl font-light text-slate-900">{Math.round(weather.main.temp)}°</div>
                      <div className="text-slate-500 capitalize mt-1">{weather.weather[0].description}</div>
                    </div>
                    {/* Render standard weather icon from API if available, else fallback */}
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather" className="w-16 h-16" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div className="flex items-center text-slate-600 text-sm">
                      <Thermometer className="w-4 h-4 mr-2 text-slate-400" />
                      Feels {Math.round(weather.main.feels_like)}°
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Droplets className="w-4 h-4 mr-2 text-slate-400" />
                      Humidity {weather.main.humidity}%
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Wind className="w-4 h-4 mr-2 text-slate-400" />
                      Wind {weather.wind.speed} m/s
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse space-y-4">
                  <div className="h-12 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="h-4 bg-slate-200 rounded"></div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Assistant Promo Card */}
            <div className="bg-gradient-to-br from-slate-900 to-sky-900 rounded-2xl shadow-xl p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Want a full itinerary?</h3>
              <p className="text-sky-100 mb-6 text-sm">Let our AI build a custom day-by-day plan for {destination.name} based on your preferences.</p>
              <Link to="/planner" className="block w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-medium transition-colors">
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
