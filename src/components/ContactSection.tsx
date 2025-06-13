"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Heart, Github, Twitter, Linkedin, Coffee, Zap } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6"
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Join Our Journey
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
            Every great dream needs believers, contributors, and fellow dreamers. 
            Be part of the privacy-first AI revolution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3" />
                Share Your Thoughts
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-left"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-left"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none text-left"
                    placeholder="Tell us about your ideas, feedback, or how you'd like to contribute..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 md:p-8 rounded-2xl border border-teal-200 dark:border-teal-800">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3" />
                Reach Out Directly
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-base">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Ranchhodbhai Aal</p>
                    <a href="mailto:me@therencho.com" className="text-teal-600 dark:text-teal-400 hover:underline text-sm">
                      me@therencho.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-base">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Rohitkumar Luni</p>
                    <a href="mailto:rohitluni123@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline text-sm">
                      rohitluni123@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ways to Connect */}
            <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3" />
                How You Can Help
              </h3>
              
              <div className="grid gap-4">
                <div className="flex items-start p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <Coffee className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base">Buy Us Coffee</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                      Fuel our late-night coding sessions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base">Contribute Code</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                      Join our development journey
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base">Spread the Word</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                      Help others discover our vision
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 md:p-8 rounded-2xl text-white">
              <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Stay Connected
              </h3>
              <p className="text-teal-100 mb-6 text-left text-sm md:text-base">
                Follow our journey and get updates
              </p>
              
              <div className="flex space-x-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 