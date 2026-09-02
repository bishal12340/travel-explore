import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination, image }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
      onClick={() => navigate(`/destination/${destination.id}`)}
    >
      <div className="relative h-56 overflow-hidden bg-slate-200">
        <img 
          src={image || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
          {destination.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{destination.name}</h3>
        </div>
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{destination.country}</span>
        </div>
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
          {destination.description}
        </p>
        <div className="mt-auto">
          <button className="text-sky-500 font-medium text-sm flex items-center group-hover:text-sky-700 transition-colors">
            Explore Details
            <motion.span 
              className="ml-1 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >→</motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
