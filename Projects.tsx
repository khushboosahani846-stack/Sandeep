
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(PROJECTS_DATA.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/gallery/1920/1080" alt="Projects Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-4">Portfolio</h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20' 
                  : 'bg-white text-gray-500 hover:text-black hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-80 overflow-hidden rounded-2xl shadow-xl bg-white"
                >
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                    <button 
                      onClick={() => setSelectedImage(project.imageUrl)}
                      className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black mb-4 transform scale-0 group-hover:scale-100 transition-transform delay-100 duration-300"
                    >
                      <ZoomIn className="w-6 h-6" />
                    </button>
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
