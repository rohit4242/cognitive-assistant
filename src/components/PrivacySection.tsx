"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  WifiOff, 
  Key, 
  FileX, 
  UserX,
  HardDrive,
  Cpu,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const PrivacySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

     const privacyFeatures = [
     {
       icon: HardDrive,
       title: "Local Processing Only",
       description: "All AI processing happens on your device. Your conversations never leave your local network.",
       color: "from-teal-500 to-emerald-500",
       benefits: ["Zero cloud dependency", "Complete data ownership", "Instant responses"]
     },
     {
       icon: WifiOff,
       title: "Offline Capability",
       description: "Full functionality without internet connection. Your AI works even when you're disconnected.",
       color: "from-cyan-500 to-teal-500",
       benefits: ["No internet required", "Always available", "No data leaks"]
     },
     {
       icon: Shield,
       title: "End-to-End Encryption",
       description: "All communications are encrypted with military-grade security protocols.",
       color: "from-teal-600 to-cyan-600",
       benefits: ["AES-256 encryption", "Secure channels", "Protected updates"]
     },
     {
       icon: FileX,
       title: "No Data Collection",
       description: "We don't collect, store, or analyze your personal data. What you say stays with you.",
       color: "from-emerald-500 to-teal-500",
       benefits: ["No telemetry", "No analytics", "No profiling"]
     }
   ];

  const comparisonData = [
    {
      feature: "Data Processing",
      traditional: "Cloud-based",
      cognitive: "Local only",
      advantage: true
    },
    {
      feature: "Internet Dependency",
      traditional: "Required",
      cognitive: "Optional",
      advantage: true
    },
    {
      feature: "Data Collection",
      traditional: "Extensive",
      cognitive: "None",
      advantage: true
    },
    {
      feature: "Response Time",
      traditional: "Network dependent",
      cognitive: "<100ms",
      advantage: true
    },
    {
      feature: "Privacy Control",
      traditional: "Limited",
      cognitive: "Complete",
      advantage: true
    }
  ];

  const securityLayers = [
    {
      layer: "Physical Security",
      description: "Secure hardware with tamper detection",
      icon: Lock,
      details: ["Encrypted storage", "Secure boot", "Hardware security module"]
    },
    {
      layer: "Network Security",
      description: "Isolated local network processing",
      icon: Shield,
      details: ["Local mesh network", "VPN support", "Firewall protection"]
    },
    {
      layer: "Application Security",
      description: "Sandboxed AI processing environment",
      icon: Cpu,
      details: ["Process isolation", "Memory protection", "Secure execution"]
    },
    {
      layer: "Data Security",
      description: "Encrypted data at rest and in transit",
      icon: Database,
      details: ["AES-256 encryption", "Secure key management", "Data integrity checks"]
    }
  ];

  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
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
             <Shield className="w-4 h-4 mr-2" />
             Privacy & Security
           </motion.div>
           
           <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
             Your Data, Your Control
           </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We've built privacy into every layer of our AI assistant. Your conversations, 
            data, and personal information remain completely under your control.
          </p>
        </motion.div>

        {/* Privacy Features */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            How We Compare
          </h3>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 bg-gray-50 dark:bg-slate-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Feature</h4>
              </div>
              <div className="p-6 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Traditional AI</h4>
              </div>
              <div className="p-6 bg-green-50 dark:bg-green-900/20">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">Cognitive Assistant</h4>
              </div>
              
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="contents"
                >
                  <div className="p-6 border-t border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-800 dark:text-gray-100">{row.feature}</span>
                  </div>
                  <div className="p-6 border-t border-gray-200 dark:border-gray-600 bg-red-25 dark:bg-red-900/10">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600 dark:text-gray-300">{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-200 dark:border-gray-600 bg-green-25 dark:bg-green-900/10">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{row.cognitive}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Layers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Multi-Layer Security
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                                         <motion.div
                       whileHover={{ rotate: 360 }}
                       transition={{ duration: 0.5 }}
                       className="mx-auto mb-4 p-4 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg"
                     >
                       <layer.icon className="w-8 h-8 text-white" />
                     </motion.div>
                    <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      {layer.layer}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {layer.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {layer.details.map((detail, idx) => (
                        <div key={detail} className="text-xs text-gray-500 dark:text-gray-400">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;