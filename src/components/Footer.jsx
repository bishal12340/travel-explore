import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-white mb-4">
              <Map className="w-8 h-8 text-sky-500" />
              <span>Travel<span className="text-sky-500">Explorer</span></span>
            </Link>
            <p className="max-w-sm mb-6 text-slate-400">
              Discover the most beautiful places around the world. Plan your next adventure with our AI-powered travel assistant.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">Twitter</a>
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">Instagram</a>
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">GitHub</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/explore" className="hover:text-sky-400 transition-colors">Destinations</Link></li>
              <li><Link to="/planner" className="hover:text-sky-400 transition-colors">AI Trip Planner</Link></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Popular Places</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
