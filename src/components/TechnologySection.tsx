"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Cpu, 
  Brain, 
  Wifi, 
  HardDrive, 
  Zap, 
  Shield, 
  Smartphone,
  Home,
  Server,
  Microchip
} from 'lucide-react';

const TechnologySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    {
      category: "Hardware",
      icon: Cpu,
      color: "from-teal-500 to-emerald-500",
      technologies: [
        {
          name: "NVIDIA Jetson Nano",
          description: "High-performance AI computing platform with 128-core Maxwell GPU",
          specs: "4GB RAM, Quad-core ARM A57 @ 1.43 GHz"
        },
        {
          name: "Edge Computing",
          description: "Local processing power for real-time AI inference",
          specs: "472 GFLOPS for AI workloads"
        }
      ]
    },
    {
      category: "AI Models",
      icon: Brain,
      color: "from-cyan-500 to-teal-500",
      technologies: [
        {
          name: "Local LLMs",
          description: "Optimized language models running entirely on-device",
          specs: "Llama 2, Mistral 7B, Custom fine-tuned models"
        },
        {
          name: "NLP Pipeline",
          description: "Advanced natural language processing for context understanding",
          specs: "Intent recognition, Entity extraction, Sentiment analysis"
        }
      ]
    },
    {
      category: "Connectivity",
      icon: Wifi,
      color: "from-teal-600 to-cyan-600",
      technologies: [
        {
          name: "IoT Integration",
          description: "Seamless smart home device connectivity and control",
          specs: "Zigbee, Z-Wave, WiFi, Bluetooth LE"
        },
        {
          name: "Mesh Networking",
          description: "Robust local network for device coordination",
          specs: "Thread, Matter compatible"
        }
      ]
    },
    {
      category: "Software",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      technologies: [
        {
          name: "Real-time OS",
          description: "Optimized operating system for low-latency responses",
          specs: "Ubuntu 18.04 LTS with RT kernel"
        },
        {
          name: "OTA Updates",
          description: "Secure over-the-air updates with rollback capability",
          specs: "Encrypted, signed, atomic updates"
        }
      ]
    }
  ];

  const architecture = [
    {
      layer: "User Interface",
      description: "Voice & touch interaction",
      icon: Smartphone,
      position: "top-4 left-1/2 transform -translate-x-1/2"
    },
    {
      layer: "AI Processing",
      description: "Local LLM inference",
      icon: Brain,
      position: "top-24 left-1/2 transform -translate-x-1/2"
    },
    {
      layer: "Edge Computing",
      description: "Jetson Nano hardware",
      icon: Cpu,
      position: "top-44 left-1/2 transform -translate-x-1/2"
    },
    {
      layer: "IoT Control",
      description: "Smart home integration",
      icon: Home,
      position: "top-64 left-1/2 transform -translate-x-1/2"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
                     <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={inView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium mb-4"
           >
             <Microchip className="w-4 h-4 mr-2" />
             Advanced Technology
           </motion.div>
           
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
             Cutting-Edge Architecture
           </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built on enterprise-grade hardware and software components, our AI assistant 
            delivers professional performance while maintaining complete privacy.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + techIndex * 0.1, duration: 0.5 }}
                      className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-4"
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {tech.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {tech.specs}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 sm:mb-12">
            System Architecture
          </h3>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Background Flow */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-3xl"></div>
            
            {/* Architecture Flow */}
            <div className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
                {architecture.map((layer, index) => (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-lg text-center h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center"
                      >
                        <layer.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg mb-2">
                        {layer.layer}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {layer.description}
                      </p>
                    </div>
                    
                    {/* Flow Arrow */}
                    {index < architecture.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                        className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-teal-500 dark:text-teal-400 z-10"
                      >
                        <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-teal-200 dark:border-teal-700">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                          </svg>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Mobile Flow Arrow */}
                    {index < architecture.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                        className="sm:hidden flex justify-center mt-4 text-teal-500 dark:text-teal-400"
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-teal-200 dark:border-teal-700">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="rotate-90">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                          </svg>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Tablet Flow Arrow */}
                    {index < architecture.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                        className="hidden sm:flex lg:hidden justify-center mt-4 text-teal-500 dark:text-teal-400"
                      >
                        <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-teal-200 dark:border-teal-700">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={index % 2 === 1 ? "rotate-90" : ""}>
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Data Flow Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Real-time Data Flow
                  </span>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8">
            Performance Metrics
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { metric: "Response Time", value: "<100ms", icon: Zap },
              { metric: "Accuracy", value: "99.9%", icon: Brain },
              { metric: "Uptime", value: "24/7", icon: Shield },
              { metric: "Power Usage", value: "5-10W", icon: HardDrive },
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-lg">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl mb-3 sm:mb-4"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1 sm:mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;