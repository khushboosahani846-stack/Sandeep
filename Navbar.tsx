
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`bg-neutral-900 text-white py-2 px-4 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-yellow-400" />
              <span>+91-7052212223</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="w-3 h-3 text-yellow-400" />
              <span>yashika.enterprises@hotmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="hidden md:inline mr-2 text-gray-400">Follow Us:</span>
            <Facebook className="w-3 h-3 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Twitter className="w-3 h-3 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Instagram className="w-3 h-3 hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2' : 'bg-black/20 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center group">
              <div className="bg-yellow-400 p-2 rounded mr-3 transition-transform group-hover:rotate-[360deg] duration-700">
                 <span className="text-black font-black text-2xl italic">YE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">YASHIKA</span>
                <span className="text-yellow-400 text-[10px] font-bold tracking-[0.4em] leading-none mt-1">ENTERPRISES</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative group text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              <Link 
                to="/quote" 
                className="bg-yellow-400 text-black px-8 py-3 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-yellow-400 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full transition-all duration-500 origin-top ease-in-out ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} bg-neutral-900 shadow-2xl overflow-hidden border-t border-white/5`}>
          <div className="px-4 pt-4 pb-10 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-5 text-sm font-bold uppercase tracking-[0.2em] border-b border-white/5 ${
                  location.pathname === link.path ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-8 bg-yellow-400 text-black px-3 py-5 font-black text-xs uppercase tracking-[0.3em]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
