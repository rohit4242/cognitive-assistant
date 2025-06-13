"use client";

import { motion } from "framer-motion";
import { Brain, Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Technology", href: "#technology" },
      { name: "Privacy", href: "#privacy" },
      { name: "Documentation", href: "/docs" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "#contact" },
      { name: "Founders", href: "#about" },
    ],
    Developers: [
      { name: "GitHub", href: "https://github.com/cognitive-assistant" },
      { name: "API Docs", href: "/docs#api-reference" },
      { name: "Discord", href: "https://discord.gg/cognitive-assistant" },
      { name: "Quick Start", href: "/docs#getting-started" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Licenses", href: "/license" },
    ],
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/cognitive-assistant",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/in/rohit4242",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:rohitluni123@gmail.com",
      label: "Email",
      color: "hover:text-teal-400",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <motion.a
                href="/"
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Cognitive Assistant
                </span>
              </motion.a>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                The future of AI assistance is private, intelligent, and
                completely under your control. Experience the power of local AI
                processing.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                >
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + linkIndex * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>
                © 2024 Cognitive Assistant by Rohitkumar Luni & Ranchhod bhai
                Aal. Made with
              </span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for privacy and AI.</span>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Changelog
              </a>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-slate-800 group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
