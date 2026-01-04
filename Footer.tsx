
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="bg-yellow-400 p-2 rounded mr-2">
                 <span className="text-black font-black text-xl italic">YE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tighter leading-none uppercase">Yashika</span>
                <span className="text-yellow-400 text-xs font-semibold tracking-widest leading-none">ENTERPRISES</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excellence in civil engineering and architectural solutions. Led by Er. Kumar Gaurav Shrivastav, we turn your vision into structural reality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">200 meter East of Gularahia Thana, Near Nav Jeevan Mission International School, Gorakhpur - 273013</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">+91-7052212223<br/>+91-7084776655</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">yashika.enterprises@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to receive updates about our latest structural projects.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="absolute right-1 top-1 bg-yellow-400 text-black p-2 rounded-lg hover:bg-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Yashika Enterprises. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
