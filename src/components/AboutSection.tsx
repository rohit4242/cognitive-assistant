"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Heart, Coffee } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-teal-950"
    >
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
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Our Dream Story
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every groundbreaking innovation starts with a simple question:{" "}
            <em>"What if we could do better?"</em>
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:border-teal-400/30 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3" />
                The Problem We See
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today's AI assistants know everything about you - your
                conversations, your habits, your secrets. They process your data
                in distant servers, controlled by corporations. We believe
                there's a better way.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 md:p-8 rounded-2xl border border-teal-200 dark:border-teal-800">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Imagine an AI assistant that's truly <strong>yours</strong> -
                running on your device, knowing your preferences without
                compromising your privacy, and getting smarter without ever
                sharing your data with anyone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 md:p-8 rounded-3xl text-white">
              <blockquote className="text-lg md:text-xl italic mb-6">
                "We're not building just another AI product. We're crafting a
                movement toward digital privacy and personal empowerment. This
                is our moonshot."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Ranchhodbhai & Rohit</p>
                  <p className="text-teal-100">Dream Team</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-cyan-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-cyan-800" />
            </div>
          </motion.div>
        </div>

        {/* The Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 flex items-center justify-center">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-teal-500 mr-3" />
            Meet the Dreamers
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:border-teal-400/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">R</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Ranchhodbhai Aal
              </h4>
              <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">
                Developer & Visionary
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                Passionate about privacy-first technology and local AI.
                Currently researching edge computing solutions and LLM
                optimization for personal devices.
              </p>
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Coffee className="w-4 h-4 mr-2" />
                <span>Fueled by coffee and big dreams</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:border-teal-400/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">R</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Rohitkumar Luni
              </h4>
              <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">
                Co-Founder & Developer
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                Bringing strategic vision and innovative thinking to transform
                ambitious ideas into reality. Focused on user experience and
                product strategy.
              </p>
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Heart className="w-4 h-4 mr-2" />
                <span>Turning dreams into plans</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-800"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-teal-500 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              We're Just Getting Started
            </h3>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              This project is in its <strong>early development phase</strong>.
              We're building the foundation, researching the technology, and
              planning our roadmap. Every great journey begins with a single
              step.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm">
              <div className="bg-white dark:bg-slate-800 px-3 py-2 md:px-4 md:py-2 rounded-full border border-teal-200 dark:border-teal-800">
                🔬 Research Phase
              </div>
              <div className="bg-white dark:bg-slate-800 px-3 py-2 md:px-4 md:py-2 rounded-full border border-teal-200 dark:border-teal-800">
                🛠️ Prototyping
              </div>
              <div className="bg-white dark:bg-slate-800 px-3 py-2 md:px-4 md:py-2 rounded-full border border-teal-200 dark:border-teal-800">
                💡 Proof of Concept
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
