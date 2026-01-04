
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/about/1920/1080" alt="About Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-4">About Us</h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-neutral-900 mb-8 leading-tight">
                Our Story: Decades of <span className="text-yellow-400">Architectural</span> Legacy
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Yashika Enterprises was founded with a single vision: to transform the landscape of civil construction through unmatched quality and innovative architectural design. Led by <strong>Er. Kumar Gaurav Shrivastav</strong>, our firm has grown into a multi-disciplinary practice.
                </p>
                <p>
                  With years of experience in Civil Engineering and Architecture services, we have successfully delivered projects ranging from luxury residences to large-scale commercial complexes. Our approach is rooted in the philosophy of "Trust in Quality, Count on Time."
                </p>
                <p>
                  Every project we undertake is treated with a unique blend of creativity and technical precision, ensuring that the end result is not just a building, but a landmark of excellence.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <img src="https://picsum.photos/seed/abt1/600/800" className="rounded-2xl shadow-xl translate-y-8" alt="Office" />
              <img src="https://picsum.photos/seed/abt2/600/800" className="rounded-2xl shadow-xl -translate-y-8" alt="Team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To provide sustainable, innovative, and cost-effective construction and architectural solutions that exceed client expectations while maintaining the highest standards of safety and integrity.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To be the most trusted and preferred construction partner globally, recognized for our commitment to quality, timely delivery, and pioneering design excellence in every structure we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality First', desc: 'Superior materials and craftsmanship in every brick.', icon: <ShieldCheck className="w-8 h-8" /> },
              { title: 'Innovation', desc: 'Embracing modern tech and creative design thinking.', icon: <Heart className="w-8 h-8" /> },
              { title: 'Integrity', desc: 'Honest communication and transparent pricing.', icon: <Target className="w-8 h-8" /> },
              { title: 'Sustainability', desc: 'Building with eco-friendly practices for a better future.', icon: <Eye className="w-8 h-8" /> }
            ].map((val, i) => (
              <div key={i} className="text-center p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-yellow-400 transition-colors">
                <div className="text-yellow-500 flex justify-center mb-6">{val.icon}</div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
