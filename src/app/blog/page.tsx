"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  Search,
  Filter
} from 'lucide-react';
import Link from 'next/link';

const BlogPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Privacy-First AI: Why Local Processing Matters",
      excerpt: "Exploring how local AI processing on edge devices like Jetson Nano is revolutionizing privacy in artificial intelligence applications.",
      author: "Rohitkumar Luni",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Privacy",
      tags: ["AI", "Privacy", "Edge Computing", "Jetson Nano"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Building Smart Home Control with Local LLMs",
      excerpt: "A deep dive into implementing intelligent home automation using locally-hosted language models for enhanced privacy and responsiveness.",
      author: "Ranchhod bhai Aal",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Technology",
      tags: ["Smart Home", "LLM", "IoT", "Automation"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "OTA Updates: Securing Your AI Assistant",
      excerpt: "How we implement secure over-the-air updates to keep your cognitive assistant up-to-date while maintaining privacy and security.",
      author: "Rohitkumar Luni",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Security",
      tags: ["OTA", "Security", "Updates", "Privacy"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Conversation Processing on Edge Devices",
      excerpt: "Technical insights into achieving low-latency, real-time conversation processing using optimized models on resource-constrained hardware.",
      author: "Rohitkumar Luni",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Technology",
      tags: ["Real-time", "Edge Computing", "NLP", "Performance"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Why We Chose Jetson Nano for Our AI Assistant",
      excerpt: "The technical and practical reasons behind selecting NVIDIA Jetson Nano as the hardware foundation for our privacy-focused AI assistant.",
      author: "Ranchhod bhai Aal",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Hardware",
      tags: ["Jetson Nano", "Hardware", "AI", "Performance"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Intelligent Scheduling: AI That Understands Your Life",
      excerpt: "How our cognitive assistant learns your patterns and preferences to provide intelligent scheduling suggestions without compromising privacy.",
      author: "Rohitkumar Luni",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Features",
      tags: ["Scheduling", "AI", "Machine Learning", "Privacy"],
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = ["All", "Privacy", "Technology", "Security", "Hardware", "Features"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Cognitive Assistant Blog
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Insights, updates, and deep dives into privacy-first AI technology, 
              edge computing, and the future of intelligent assistants.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" 
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700" 
                    : "hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-teal-900/20"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">Featured Article</p>
                    </div>
                  </div>
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-6 h-6" />
                    </div>
                    <p className="text-xs opacity-80">{post.category}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>
                    
                    <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 dark:hover:bg-teal-900/20"
          >
            Load More Articles
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                Get the latest insights on privacy-first AI, edge computing, and cognitive assistant technology 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <Button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Back to Home */}
      <div className="fixed bottom-8 right-8">
        <Link href="/">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg"
          >
            ← Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage; 