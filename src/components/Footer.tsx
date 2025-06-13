"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          
          {/* Logo & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center"
              >
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-slate-900" />
              </motion.div>
              <span className="text-base md:text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Cognitive Assistant
              </span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-teal-400 rounded-full"
              />
              <span className="text-sm text-teal-200">Dreaming in Progress...</span>
            </div>
          </motion.div>

          {/* Dream Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center order-3 md:order-2"
          >
            <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-700/30">
              <h3 className="text-sm font-semibold text-teal-300 mb-2">Current Phase</h3>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-white font-medium text-sm md:text-base">Research & Discovery</span>
              </div>
              <div className="w-full bg-teal-900/50 rounded-full h-2 mt-3">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '25%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
                />
              </div>
              <span className="text-xs text-teal-300 mt-1 block">25% Complete</span>
            </div>
          </motion.div>

          {/* Contact & Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right order-2 md:order-3"
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Built with</p>
              <div className="flex items-center justify-center md:justify-end space-x-1">
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-sm">and</span>
                <Code className="w-4 h-4 text-teal-400" />
                <span className="text-sm">by dreamers</span>
              </div>
              <div className="text-xs text-teal-200">
                Ranchhodbhai & Rohit
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-teal-800/30 mt-6 md:mt-8 pt-4 md:pt-6 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Cognitive Assistant Project. A dream in development.
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-400">
              <span>Privacy First</span>
              <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
              <span>Open Source</span>
              <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
              <span>Community Driven</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-3 md:mt-4 text-xs text-teal-300 italic"
          >
            "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
