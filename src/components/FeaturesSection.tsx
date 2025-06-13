"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  MessageSquare, 
  Home, 
  Calendar, 
  Shield, 
  Cpu, 
  Wifi,
  WifiOff,
  Download,
  Mic,
  Brain,
  Lock,
  Zap
} from 'lucide-react';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

     const features = [
     {
       icon: MessageSquare,
       title: "Real-time Conversations",
       description: "Natural, contextual conversations with low-latency responses for seamless interaction experience.",
       color: "from-teal-500 to-cyan-500",
       highlights: ["Natural Language Processing", "Context Awareness", "Multi-turn Conversations"]
     },
     {
       icon: Home,
       title: "Smart Home Control",
       description: "Seamlessly integrate and control your IoT devices with voice commands and intelligent automation.",
       color: "from-emerald-500 to-teal-500",
       highlights: ["IoT Integration", "Voice Commands", "Automation Rules"]
     },
     {
       icon: Calendar,
       title: "Intelligent Scheduling",
       description: "AI-powered calendar management with smart suggestions and automatic conflict resolution.",
       color: "from-cyan-500 to-teal-600",
       highlights: ["Smart Scheduling", "Conflict Detection", "Meeting Suggestions"]
     },
     {
       icon: Shield,
       title: "Privacy-First Design",
       description: "Your data stays on your device. No cloud dependency, no data mining, complete privacy control.",
       color: "from-teal-600 to-emerald-600",
       highlights: ["Local Processing", "Zero Data Collection", "Complete Privacy"]
     },
     {
       icon: WifiOff,
       title: "Offline Capability",
       description: "Full functionality without internet connection. Your AI assistant works anywhere, anytime.",
       color: "from-cyan-600 to-teal-500",
       highlights: ["Offline Processing", "Local LLMs", "No Internet Required"]
     },
     {
       icon: Download,
       title: "OTA Updates",
       description: "Secure over-the-air updates to enhance functionality while maintaining privacy and security.",
       color: "from-teal-500 to-emerald-500",
       highlights: ["Secure Updates", "Feature Enhancement", "Privacy Maintained"]
     }
   ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
             <Zap className="w-4 h-4 mr-2" />
             Powerful Features
           </motion.div>
           
           <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
             Everything You Need in an AI Assistant
           </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology to provide a comprehensive AI experience 
            that respects your privacy and works completely offline.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              className="group"
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {feature.title}
                    </CardTitle>
                  </div>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * idx, duration: 0.4 }}
                        className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Powered by Advanced Technology
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              { icon: Cpu, label: "Jetson Nano" },
              { icon: Brain, label: "Local LLMs" },
              { icon: Wifi, label: "IoT Integration" },
              { icon: Lock, label: "Edge Computing" },
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              >
                                 <tech.icon className="w-5 h-5 text-teal-600" />
                 <span className="font-medium text-gray-700 dark:text-gray-300">
                   {tech.label}
                 </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;