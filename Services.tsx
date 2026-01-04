
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/services/1920/1080" alt="Services Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-4">Our Services</h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {SERVICES_DATA.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 -z-0 rounded-3xl opacity-20"></div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neutral-900 -z-0 rounded-3xl opacity-5"></div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 text-yellow-600 rounded-full font-bold text-xs uppercase tracking-widest">
                    Expertise {index + 1}
                  </div>
                  <h3 className="text-4xl font-montserrat font-bold text-neutral-900">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description} We bring years of field experience to ensure that every {service.title.toLowerCase()} project meets international safety and aesthetics standards.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Custom Project Planning',
                      'Material Consultation',
                      'Structural Integrity Checks',
                      'Vastu Compliance',
                      'Cost Estimation',
                      'On-site Management'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all">
                    Inquire About This Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
