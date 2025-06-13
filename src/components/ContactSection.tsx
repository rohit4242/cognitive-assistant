"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Users
} from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for support or partnership inquiries",
      value: "me@therencho.com",
      color: "from-teal-500 to-cyan-500",
      action: "mailto:me@therencho.com"
    },
    {
      icon: MessageSquare,
      title: "Join Discord",
      description: "Connect with our community and developers",
      value: "Discord Community",
      color: "from-cyan-500 to-teal-500",
      action: "https://discord.gg/cognitive-assistant"
    },
    {
      icon: Phone,
      title: "Schedule Call",
      description: "Book a demo or technical consultation",
      value: "Book Meeting",
      color: "from-emerald-500 to-teal-500",
      action: "https://calendly.com/cognitive-assistant"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/cognitive-assistant", color: "hover:text-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/rohit4242", color: "hover:text-blue-600" },
    { icon: Mail, label: "Email", href: "mailto:rohitluni123@gmail.com", color: "hover:text-teal-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 text-white">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4"
          >
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Ready to experience privacy-first AI? Have questions about our technology? 
            Want to join our community? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Contact Methods */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Choose Your Preferred Way</h3>
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`p-3 rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}
                          >
                            <method.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {method.title}
                            </h4>
                            <p className="text-blue-100 text-sm mb-2">
                              {method.description}
                            </p>
                            <Button
                              variant="ghost"
                              className="text-blue-300 hover:text-white hover:bg-white/10 p-0 h-auto font-medium"
                              onClick={() => window.open(method.action, '_blank')}
                            >
                              {method.value}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your project or question..."
                    />
                  </div>
                  
                                      <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-blue-100">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h4 className="font-semibold mb-2">Distributed Team</h4>
              <p className="text-sm">Working remotely across time zones</p>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-sm">Usually within 24 hours</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4 text-teal-400" />
              <h4 className="font-semibold mb-2">Community</h4>
              <p className="text-sm">Building together with users</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 