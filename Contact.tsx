
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/contactbg/1920/1080" alt="Contact Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-4">Contact Us</h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Our Office</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      200 meter East of Gularahia Thana, Near Nav Jeevan Mission International School, Gorakhpur - 273013
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Call Us</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">+91-7052212223</p>
                    <p className="text-gray-500 text-sm leading-relaxed">+91-7084776655</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email Support</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">yashika.enterprises@hotmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 rounded-3xl text-white">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Working Hours</h4>
                    <p className="text-gray-400 text-sm">Mon - Sat: 09:00 AM - 07:00 PM</p>
                    <p className="text-gray-400 text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-2xl border border-neutral-100"
              >
                <h3 className="text-3xl font-bold mb-10">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-neutral-50 border-2 border-transparent rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-neutral-50 border-2 border-transparent rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-neutral-50 border-2 border-transparent rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all" 
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Subject</label>
                      <select className="w-full bg-neutral-50 border-2 border-transparent rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all">
                        <option>Residential Query</option>
                        <option>Commercial Query</option>
                        <option>Interior Design</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                    <textarea 
                      rows={6} 
                      className="w-full bg-neutral-50 border-2 border-transparent rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button className="w-full bg-neutral-900 text-white font-black uppercase tracking-widest py-5 rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-xl flex items-center justify-center space-x-3">
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full bg-neutral-200">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.34185614984!2d83.31010074335938!3d26.8188151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b37f401f7%3A0xc07c9103c8172922!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716381234567!5m2!1sen!2sin"
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
