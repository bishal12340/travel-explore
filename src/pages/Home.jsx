import { motion } from 'framer-motion';
import { ArrowRight, Search, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Fallback/Mock */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Travel Landscape" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow tracking-tight"
          >
            Discover Your Next <span className="text-sky-400">Adventure</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto text-shadow font-light"
          >
            Explore breathtaking destinations, get AI-powered itineraries, and experience the world like never before.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSearch}
            className="glass-panel p-2 rounded-full max-w-2xl mx-auto flex items-center gap-2"
          >
            <MapPin className="text-slate-400 ml-4 w-6 h-6 hidden sm:block" />
            <input 
              type="text"
              placeholder="Where do you want to go?"
              className="flex-grow bg-transparent border-none outline-none text-slate-900 px-4 text-lg placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
              <Search className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Categories / Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending Destinations</h2>
              <p className="text-slate-500">Most popular choices for your next trip</p>
            </div>
            <Link to="/explore" className="hidden sm:flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors">
              See all <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {/* Mock Grid for Trending */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'paris', name: 'Paris, France', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' },
              { id: 'kyoto', name: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
              { id: 'bali', name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
            ].map((dest) => (
              <Link to={`/destination/${dest.id}`} key={dest.id} className="block group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all h-80">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                  <div className="flex justify-between items-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-slate-200">Explore now</span>
                    <ArrowRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Plan smarter, not harder.</h2>
              <p className="text-xl text-slate-400 mb-8 font-light">
                Let our AI travel assistant create the perfect itinerary for your next trip. Tell us your preferences, and we'll handle the rest.
              </p>
              <Link 
                to="/planner" 
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg shadow-sky-500/20"
              >
                Try AI Planner <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="flex gap-4 items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0"></div>
                  <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-slate-200">I'm looking for a 5-day itinerary in Rome for a couple interested in history and food.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div className="bg-sky-900/40 border border-sky-800 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sky-100 mb-2">I can help with that! Here is a perfect 5-day romantic and historic itinerary for Rome:</p>
                    <div className="space-y-2 mt-4">
                      <div className="h-2 bg-sky-800 rounded w-full"></div>
                      <div className="h-2 bg-sky-800 rounded w-5/6"></div>
                      <div className="h-2 bg-sky-800 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
