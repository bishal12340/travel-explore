import { useSearchParams } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { fetchImage } from '../services/imageApi';
import { motion } from 'framer-motion';

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('All');
  const [destinationImages, setDestinationImages] = useState({});

  const categories = ['All', ...new Set(destinations.map(d => d.category))];

  useEffect(() => {
    // Fetch images for destinations
    const loadImages = async () => {
      const imagesMap = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const imgUrl = await fetchImage(`${dest.name} ${dest.country} landmark`);
          imagesMap[dest.id] = imgUrl;
        })
      );
      setDestinationImages(imagesMap);
    };
    loadImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  const filteredDestinations = useMemo(() => {
    const activeQuery = searchParams.get('q') || '';
    return destinations.filter((dest) => {
      const matchesSearch = dest.name.toLowerCase().includes(activeQuery.toLowerCase()) || 
                           dest.country.toLowerCase().includes(activeQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchParams, activeCategory]);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Explore the World</h1>
            <p className="text-lg text-slate-500 max-w-2xl">Discover amazing destinations, beautiful beaches, historic cities, and natural wonders for your next adventure.</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-4">
          <form onSubmit={handleSearch} className="flex-grow flex items-center bg-slate-50 rounded-xl px-4 py-2 border border-slate-200 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 transition-all">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search destinations, countries..." 
              className="bg-transparent border-none outline-none w-full text-slate-800 py-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" onClick={() => { setQuery(''); setSearchParams({}); }} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </form>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="w-5 h-5 text-slate-400 hidden md:block ml-2 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-slate-600 font-medium">
            Showing <span className="text-slate-900">{filteredDestinations.length}</span> destinations
            {searchParams.get('q') && <span> for "{searchParams.get('q')}"</span>}
          </p>
        </div>

        {/* Destination Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DestinationCard destination={dest} image={destinationImages[dest.id]} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No destinations found</h3>
            <p className="text-slate-500 max-w-md mb-8">We couldn't find any destinations matching your current search or filter criteria.</p>
            <button 
              onClick={() => { setQuery(''); setActiveCategory('All'); setSearchParams({}); }}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
