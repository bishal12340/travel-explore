import { useState } from 'react';
import { generateItinerary } from '../services/geminiApi';
import { Map, Calendar as CalendarIcon, Loader2, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const Planner = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);
  const [style, setStyle] = useState('balanced');
  
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const result = await generateItinerary(destination, days, style);
      setItinerary(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-sky-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">AI Trip Planner</h1>
          <p className="text-lg text-slate-600">Tell us where you want to go, and our AI will generate a personalized day-by-day itinerary tailored to your travel style.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Section */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination</label>
                <div className="relative">
                  <Map className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g., Tokyo, Japan"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Days): {days}</label>
                <input 
                  type="range" 
                  min="1" max="14" 
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-sky-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 day</span>
                  <span>14 days</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Travel Style</label>
                <select 
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors appearance-none"
                >
                  <option value="balanced">Balanced (Mix of everything)</option>
                  <option value="cultural">Cultural & Historic</option>
                  <option value="foodie">Food & Culinary</option>
                  <option value="adventure">Action & Adventure</option>
                  <option value="relaxed">Relaxed & Leisure</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading || !destination}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center shadow-lg"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating Plan...</>
                ) : (
                  <><CalendarIcon className="w-5 h-5 mr-2" /> Create Itinerary</>
                )}
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 flex items-center mb-6">
                <p>{error}</p>
              </div>
            )}

            {!itinerary && !loading && !error && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 bg-white rounded-3xl border border-slate-100 border-dashed p-8">
                <Navigation className="w-16 h-16 mb-4 text-slate-300" />
                <p className="text-lg">Your itinerary will appear here</p>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-3xl border border-slate-100 p-8 min-h-[400px] space-y-8 animate-pulse">
                <div className="h-8 bg-slate-200 rounded-full w-1/3 mb-10"></div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-6">
                    <div className="w-16 h-16 bg-slate-200 rounded-full shrink-0"></div>
                    <div className="w-full space-y-4 pt-2">
                      <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                      <div className="h-24 bg-slate-100 rounded-xl w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {itinerary && !loading && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{destination} Itinerary</h2>
                    <p className="text-slate-500">{days} Days • {style.charAt(0).toUpperCase() + style.slice(1)} Style</p>
                  </div>
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-sky-500" />
                  </div>
                </div>

                <div className="space-y-12 relative">
                  {/* Timeline connecting line */}
                  <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>
                  
                  {itinerary.map((dayData, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex flex-col items-center justify-center shadow-lg shrink-0 border-4 border-slate-50">
                          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Day</span>
                          <span className="text-2xl font-black">{dayData.day}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{dayData.title}</h3>
                      </div>

                      <div className="pl-28 space-y-4">
                        {dayData.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500/0 group-hover:bg-sky-500 transition-colors"></div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                              <div className="sm:w-32 shrink-0">
                                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg">
                                  {activity.time}
                                </span>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{activity.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{activity.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
