"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Shield,
  Brain,
  Cpu,
  WifiOff,
  User,
  Mail,
  Linkedin,
  MessageSquare
} from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Shield, label: "Privacy Protected", value: "100%", color: "text-green-500" },
    { icon: WifiOff, label: "Offline Capable", value: "24/7", color: "text-blue-500" },
    { icon: Brain, label: "AI Accuracy", value: "99.9%", color: "text-purple-500" },
    { icon: Cpu, label: "Response Time", value: "<100ms", color: "text-orange-500" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe your personal data should remain personal. Our AI processes everything locally, ensuring your conversations and information never leave your device.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Intelligent & Adaptive",
      description: "Our AI learns from your patterns and preferences to provide increasingly personalized assistance while maintaining complete privacy.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Every feature is designed with the user in mind, focusing on intuitive interactions and seamless integration into your daily life.",
      color: "from-teal-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We're constantly improving with secure OTA updates that enhance functionality while maintaining our privacy-first approach.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
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
            <Target className="w-4 h-4 mr-2" />
            Our Mission
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Redefining AI Assistance
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're building the future of personal AI assistants - one that puts privacy, security, 
            and user control at the forefront while delivering unprecedented intelligence and capability.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                The Privacy Problem
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Traditional AI assistants sacrifice your privacy for convenience, sending your most 
                personal conversations to the cloud. We believe you shouldn't have to choose between 
                intelligence and privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Solution
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Using powerful edge computing with Jetson Nano and locally-run large language models, 
                we deliver enterprise-grade AI capabilities while keeping all your data on your device. 
                No cloud, no compromise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {['Privacy-First', 'Edge Computing', 'Local LLMs', 'IoT Ready'].map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} shadow-lg mb-4`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Meet Our Founders
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Rohitkumar Luni */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
                  >
                    <Image 
                      src="/Rohitkumar_Luni_Photo.jpg" 
                      alt="Rohitkumar Luni" 
                      width={128} 
                      height={128}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Rohitkumar Luni
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">
                    Developer & Founder
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Visionary developer and founder driving the future of privacy-first AI. 
                    Passionate about creating technology that empowers users while protecting their privacy.
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="mailto:rohitluni123@gmail.com"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </motion.a>
                    <motion.a
                      href="https://in.linkedin.com/in/rohit4242"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ranchhod bhai Aal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
                  >
                    <Image 
                      src="/Ranchhodbhai_Aal_Photo.jpg" 
                      alt="Ranchhod bhai Aal" 
                      width={128} 
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Ranchhod bhai Aal
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">
                    Co-Founder
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Strategic co-founder bringing business acumen and vision to revolutionize 
                    AI assistance. Committed to building technology that serves humanity.
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="mailto:me@therencho.com"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </motion.a>
                    <motion.a
                      href="mailto:me@therencho.com"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 