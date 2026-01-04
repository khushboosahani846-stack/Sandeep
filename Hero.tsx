
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Use springs for smoother transition response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Refined parallax mappings for more impact
  const y = useTransform(smoothProgress, [0, 1], ["0%", "45%"]);
  const scale = useTransform(smoothProgress, [0, 1], [1.05, 1.25]);
  const x = useTransform(smoothProgress, [0, 1], ["0%", "3%"]);
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background with Enhanced Parallax */}
      <motion.div 
        style={{ y, scale, x }}
        className="absolute inset-0 z-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.45]"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-cranes-and-building-4416-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Advanced Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center sm:items-start">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center sm:text-left"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center space-x-4 mb-8 overflow-hidden whitespace-nowrap"
          >
            <div className="h-[2px] w-12 bg-yellow-400"></div>
            <span className="text-yellow-400 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
              Quality Construction & Modern Design
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white mb-8 leading-[1.05] tracking-tighter">
            WE BUILD <br className="hidden md:block" /> 
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.9)' }}>MODERN</span> <br className="hidden md:block" />
            <span className="text-yellow-400">STRUCTURES.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-2xl opacity-90">
            From concept to creation, Yashika Enterprises delivers structural masterpieces 
            that stand the test of time. Engineering excellence meets visionary design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-8">
            <Link 
              to="/quote" 
              className="group relative bg-yellow-400 text-black px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(250,204,21,0.3)] w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Project <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </Link>
            
            <Link 
              to="/projects" 
              className="group flex items-center space-x-4 text-white font-black text-xs uppercase tracking-[0.3em] hover:text-yellow-400 transition-colors py-4 px-2"
            >
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all">
                <Play className="w-4 h-4 fill-white group-hover:fill-yellow-400 transition-all" />
              </div>
              <span>View Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 h-48 w-px bg-gradient-to-t from-yellow-400 to-transparent hidden xl:block"></div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
