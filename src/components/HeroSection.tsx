"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play, Shield, Zap, Brain, Cpu, Wifi, WifiOff } from 'lucide-react';

const HeroSection = () => {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const features = [
    { icon: Shield, text: "Privacy First", color: "text-green-500" },
    { icon: WifiOff, text: "Offline Capable", color: "text-blue-500" },
    { icon: Zap, text: "Real-time Response", color: "text-yellow-500" },
    { icon: Brain, text: "Smart AI", color: "text-purple-500" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Powered by Jetson Nano & Local LLMs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent leading-tight"
            >
              Your Privacy-First
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">AI Companion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Experience the future of AI assistants with real-time conversations, 
              smart home control, and intelligent scheduling - all while keeping your 
              data completely private and offline.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm sm:text-base"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <motion.div
              animate={floatingAnimation}
              className="relative mx-auto w-full max-w-xs sm:max-w-md"
            >
              {/* Central AI Brain */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                    <Brain className="w-16 h-16 sm:w-24 sm:h-24 text-teal-600" />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[
                  { icon: Shield, position: "top-0 left-4 sm:left-8", delay: 0 },
                  { icon: Zap, position: "top-4 sm:top-8 right-0", delay: 0.5 },
                  { icon: Cpu, position: "bottom-0 right-4 sm:right-8", delay: 1 },
                  { icon: WifiOff, position: "bottom-4 sm:bottom-8 left-0", delay: 1.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + item.delay, duration: 0.5 }}
                    className={`absolute ${item.position} w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center`}
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Animated Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5 }}
                className={`absolute inset-${ring * 4} border border-teal-400/20 rounded-full -z-10`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 