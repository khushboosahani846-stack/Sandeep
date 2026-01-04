
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, CheckCircle2 } from 'lucide-react';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-neutral-950 flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        {!submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left Sidebar Info */}
            <div className="bg-yellow-400 p-12 md:w-1/3 flex flex-col justify-between text-black">
              <div>
                <ClipboardCheck className="w-16 h-16 mb-8" />
                <h2 className="text-3xl font-black mb-6 leading-tight">Instant Estimate</h2>
                <p className="font-medium opacity-80 mb-8">Tell us about your project requirements and our engineers will get back to you within 24 hours.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2 text-sm font-bold">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Expert Consultation</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-bold">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Detailed Quotation</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-bold">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Architectural Layout</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="p-12 md:w-2/3">
              <h3 className="text-2xl font-bold mb-8">Project Details</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input required type="text" placeholder="Your Name" className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input required type="tel" placeholder="Phone Number" className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors" />
                  <select className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors bg-white">
                    <option>Residential Construction</option>
                    <option>Commercial Building</option>
                    <option>Interior Planning</option>
                    <option>Renovation Work</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Plot Area (sq. ft.)" className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors" />
                  <input type="text" placeholder="Project Location" className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors" />
                </div>
                <textarea rows={4} placeholder="Tell us more about your vision..." className="w-full border-b-2 border-neutral-100 py-3 px-1 focus:outline-none focus:border-yellow-400 transition-colors resize-none"></textarea>
                
                <div className="flex items-center space-x-3 text-gray-500 text-sm">
                  <input type="checkbox" id="terms" className="w-4 h-4 accent-yellow-400" />
                  <label htmlFor="terms">I agree to the processing of my data for the quote estimation.</label>
                </div>

                <button type="submit" className="w-full bg-neutral-900 text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-xl">
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-16 text-center shadow-2xl"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black mb-4">Request Received!</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto">
              Thank you for reaching out to Yashika Enterprises. Our lead engineer, Er. Kumar Gaurav Shrivastav, will review your requirements and contact you shortly with a customized estimate.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg"
            >
              Back to Form
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quote;
