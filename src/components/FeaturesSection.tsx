"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Home, 
  Calendar,
  MessageSquare,
  Cpu,
  Eye,
  Lightbulb
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const dreamFeatures = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat with your AI like talking to a friend - understanding context, emotions, and your unique communication style.",
      status: "🔬 Research Phase",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations never leave your device. No cloud processing, no data collection, no surveillance.",
      status: "🎯 Core Principle",
      gradient: "from-teal-600 to-teal-400",
      delay: 0.2
    },
    {
      icon: Home,
      title: "Smart Home Control",
      description: "Seamlessly control your IoT devices with voice commands and intelligent automation routines.",
      status: "💭 Planned Feature",
      gradient: "from-cyan-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI-powered calendar management that learns your preferences and optimizes your time.",
      status: "🔧 In Design",
      gradient: "from-teal-400 to-cyan-400",
      delay: 0.4
    },
    {
      icon: Cpu,
      title: "Edge Computing Power",
      description: "Harness the power of local AI processing with optimized hardware for real-time responses.",
      status: "🛠️ Prototyping",
      gradient: "from-cyan-600 to-teal-600",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant responses without internet delays. Your AI assistant is always ready when you are.",
      status: "⚡ Vision Goal",
      gradient: "from-teal-300 to-cyan-300",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6"
          >
            <Lightbulb className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-6">
            Envisioned Features
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These are the capabilities we're <span className="text-teal-400 font-semibold">dreaming of building</span> - 
            features that could revolutionize how we interact with AI assistants.
          </p>
          
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-teal-500/20 border border-teal-400/30 rounded-full">
            <Eye className="w-5 h-5 text-teal-400 mr-2" />
            <span className="text-teal-300 font-medium">Vision in Development</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreamFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                      {feature.status}
                    </span>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-teal-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Development Roadmap</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 p-6 rounded-2xl border border-teal-500/30 flex-1">
              <div className="text-teal-400 font-bold mb-2">Phase 1 - Current</div>
              <div className="text-white font-semibold mb-2">Foundation & Research</div>
              <div className="text-gray-300 text-sm">Exploring AI models, hardware requirements, and privacy architectures</div>
            </div>
            
            <div className="hidden md:block text-gray-500">→</div>
            
            <div className="bg-gradient-to-r from-cyan-500/20 to-teal-400/20 p-6 rounded-2xl border border-cyan-500/30 flex-1">
              <div className="text-cyan-400 font-bold mb-2">Phase 2</div>
              <div className="text-white font-semibold mb-2">Core Development</div>
              <div className="text-gray-300 text-sm">Building the AI engine and basic conversation capabilities</div>
            </div>
            
            <div className="hidden md:block text-gray-500">→</div>
            
            <div className="bg-gradient-to-r from-teal-400/20 to-teal-500/20 p-6 rounded-2xl border border-teal-400/30 flex-1">
              <div className="text-teal-400 font-bold mb-2">Phase 3</div>
              <div className="text-white font-semibold mb-2">Feature Integration</div>
              <div className="text-gray-300 text-sm">Adding smart home control, scheduling, and advanced features</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 p-8 rounded-3xl border border-teal-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Follow Our Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're building something special, and we'd love to have you along for the ride. 
              Get updates on our progress and be the first to know when we have something to share.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            >
              Stay Updated
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;