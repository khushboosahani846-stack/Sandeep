
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, HardHat, Quote as QuoteIcon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { SERVICES_DATA, PROJECTS_DATA, STATS_DATA } from '../constants';

const Home: React.FC = () => {
  const testimonials = [
    { name: "Rajesh Khanna", role: "Real Estate Developer", text: "Yashika Enterprises' attention to detail and commitment to timelines is unmatched. They delivered our commercial complex ahead of schedule with zero quality compromises.", stars: 5 },
    { name: "Anjali Sharma", role: "Villa Owner", text: "Working with them was a breeze. Er. Kumar Gaurav and his team understood exactly what we wanted for our home and turned it into reality beautifully.", stars: 5 },
    { name: "Vikram Singh", role: "Industrialist", text: "The architectural planning was precise and the execution was flawless. Highly recommend Yashika Enterprises for high-end structural works.", stars: 5 },
  ];

  const partners = [
    "UltraTech Cement", "TATA Tiscon", "Asian Paints", "Kajaria", "Jaquar", "L&T"
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-yellow-500 font-black uppercase tracking-[0.4em] text-xs block mb-4"
              >
                Our Expertise
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-montserrat font-black text-neutral-900 leading-none"
              >
                PROFESSIONAL <br />
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #171717' }}>SERVICES.</span>
              </motion.h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm font-medium mt-8 md:mt-0 leading-relaxed uppercase tracking-widest opacity-60">
              We provide end-to-end solutions from architectural blueprints to the final brick laid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-12 transition-all duration-500 hover:bg-neutral-900 hover:text-white relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-yellow-400 transition-all duration-500 group-hover:h-full"></div>
                <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-10 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-500">
                  <div className="text-neutral-900">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 mb-10 text-sm font-medium leading-loose">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-yellow-400 transition-colors">
                  View Service <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Ticker */}
      <div className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
            {partners.map((partner, i) => (
              <span key={i} className="text-2xl font-black uppercase tracking-tighter text-neutral-800">{partner}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-black text-white mb-3 font-montserrat">{stat.value}</div>
                <div className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.4em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-4">
            <div>
              <span className="text-yellow-500 font-black uppercase tracking-[0.4em] text-xs block mb-4">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-neutral-900">MASTERPIECES.</h2>
            </div>
            <Link to="/projects" className="text-neutral-900 font-black uppercase tracking-[0.2em] text-[10px] hover:text-yellow-500 flex items-center mb-2 transition-colors">
              Explore All <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden bg-neutral-900 aspect-[4/5]"
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{project.category}</span>
                  <h3 className="text-white text-3xl font-black mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75 leading-tight">{project.title}</h3>
                  <div className="w-12 h-1 bg-yellow-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>
                </div>
                <Link to="/projects" className="absolute inset-0 z-10"></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-neutral-50 overflow-hidden relative">
        <div className="absolute -top-24 -left-24 opacity-[0.03] select-none pointer-events-none">
          <QuoteIcon className="w-96 h-96 text-neutral-900" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Client Reviews
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-neutral-900 mb-20 leading-none uppercase">
            TRUSTED BY <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #171717' }}>MANY.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 text-left relative group"
              >
                <div className="flex mb-6 text-yellow-400">
                  {[...Array(item.stars)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm font-medium leading-loose mb-10 italic">"{item.text}"</p>
                <div>
                  <h4 className="font-black text-neutral-900 uppercase tracking-widest text-xs mb-1">{item.name}</h4>
                  <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
                <div className="absolute bottom-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <QuoteIcon className="w-12 h-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-yellow-400/5 backdrop-blur-[1px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-8 leading-none tracking-tight">
              DREAM IT. <br />
              <span className="text-yellow-400">WE'LL BUILD IT.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Join hundreds of happy clients who trusted Yashika Enterprises with their vision. 
              Let's create something landmark together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
              <Link to="/quote" className="bg-yellow-400 text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_10px_40px_rgba(250,204,21,0.2)] w-full sm:w-auto">
                Request a Quote
              </Link>
              <Link to="/contact" className="text-white font-black text-xs uppercase tracking-[0.3em] hover:text-yellow-400 transition-colors py-4 group">
                Contact Our Experts <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
