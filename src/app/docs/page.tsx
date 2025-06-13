"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Book, 
  Code, 
  Download, 
  Settings, 
  Zap,
  Shield,
  Cpu,
  Wifi,
  Terminal,
  FileText,
  ExternalLink,
  Copy,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const DocsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const docSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Zap,
      description: "Quick setup and installation guide",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "hardware-setup",
      title: "Hardware Setup",
      icon: Cpu,
      description: "Jetson Nano configuration and requirements",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "software-installation",
      title: "Software Installation",
      icon: Download,
      description: "Installing the cognitive assistant software",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "configuration",
      title: "Configuration",
      icon: Settings,
      description: "Customizing your AI assistant settings",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: Code,
      description: "Complete API documentation and examples",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      description: "Privacy features and security best practices",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Hardware Requirements",
      description: "Ensure you have a Jetson Nano with at least 4GB RAM and 32GB storage",
      code: `# Check Jetson Nano specifications
cat /proc/cpuinfo | grep "model name"
free -h
df -h`
    },
    {
      step: 2,
      title: "Download Software",
      description: "Download the latest Cognitive Assistant release",
      code: `# Download the latest release
wget https://github.com/cognitive-assistant/releases/latest/cognitive-assistant.tar.gz
tar -xzf cognitive-assistant.tar.gz
cd cognitive-assistant`
    },
    {
      step: 3,
      title: "Install Dependencies",
      description: "Install required system dependencies and Python packages",
      code: `# Install system dependencies
sudo apt update
sudo apt install python3-pip python3-venv git

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt`
    },
    {
      step: 4,
      title: "Configure Settings",
      description: "Set up your initial configuration",
      code: `# Copy configuration template
cp config/config.example.yaml config/config.yaml

# Edit configuration
nano config/config.yaml`
    },
    {
      step: 5,
      title: "Start the Assistant",
      description: "Launch your cognitive assistant",
      code: `# Start the assistant
python main.py --config config/config.yaml

# Or use the service script
./scripts/start-assistant.sh`
    }
  ];

  const apiExamples = [
    {
      title: "Voice Command",
      description: "Send a voice command to the assistant",
      code: `curl -X POST http://localhost:8080/api/voice \\
  -H "Content-Type: application/json" \\
  -d '{
    "command": "turn on the living room lights",
    "user_id": "user123"
  }'`
    },
    {
      title: "Schedule Task",
      description: "Schedule a task or reminder",
      code: `curl -X POST http://localhost:8080/api/schedule \\
  -H "Content-Type: application/json" \\
  -d '{
    "task": "Meeting with team",
    "datetime": "2024-01-20T14:00:00Z",
    "user_id": "user123"
  }'`
    },
    {
      title: "Smart Home Control",
      description: "Control smart home devices",
      code: `curl -X POST http://localhost:8080/api/devices \\
  -H "Content-Type: application/json" \\
  -d '{
    "device_id": "light_001",
    "action": "toggle",
    "room": "living_room"
  }'`
    }
  ];

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
            <div className="flex items-center justify-center mb-6">
              <Book className="w-16 h-16 mr-4" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Documentation
              </h1>
            </div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Complete guide to setting up, configuring, and using your privacy-first 
              cognitive assistant powered by Jetson Nano and local LLMs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Documentation Sections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Quick Start Guide
          </h2>
          <div className="space-y-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 bg-gradient-to-br from-teal-500 to-cyan-500 p-6 text-white">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                            <span className="font-bold text-sm">{step.step}</span>
                          </div>
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="text-cyan-100 text-sm">
                          {step.description}
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="relative">
                          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{step.code}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            onClick={() => copyToClipboard(step.code, `step-${step.step}`)}
                          >
                            {copiedCode === `step-${step.step}` ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* API Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            API Reference
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {apiExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {example.description}
                    </p>
                    <div className="relative">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                        <code>{example.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(example.code, `api-${index}`)}
                      >
                        {copiedCode === `api-${index}` ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Hardware Requirements
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• NVIDIA Jetson Nano (4GB recommended)</li>
                  <li>• 32GB+ microSD card (Class 10 or higher)</li>
                  <li>• 5V 4A power supply</li>
                  <li>• USB microphone and speakers</li>
                  <li>• Ethernet or WiFi connectivity</li>
                  <li>• Optional: Camera module for visual features</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Terminal className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Software Requirements
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Ubuntu 18.04+ (JetPack 4.6+)</li>
                  <li>• Python 3.8+</li>
                  <li>• CUDA 10.2+ (included with JetPack)</li>
                  <li>• Docker (optional, for containerized deployment)</li>
                  <li>• Git for version control</li>
                  <li>• 8GB+ free storage space</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Configuration Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Configuration Examples
          </h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
                Basic Configuration (config.yaml)
              </h3>
              <div className="relative">
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`# Cognitive Assistant Configuration
server:
  host: "0.0.0.0"
  port: 8080
  debug: false

ai:
  model_path: "./models/llama-2-7b-chat.gguf"
  max_tokens: 2048
  temperature: 0.7
  context_length: 4096

audio:
  input_device: "default"
  output_device: "default"
  sample_rate: 16000
  channels: 1

smart_home:
  enabled: true
  discovery_timeout: 30
  protocols:
    - "zigbee"
    - "wifi"
    - "bluetooth"

privacy:
  local_processing: true
  data_retention_days: 30
  encryption_enabled: true
  telemetry_enabled: false

logging:
  level: "INFO"
  file: "./logs/assistant.log"
  max_size_mb: 100`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() => copyToClipboard(`# Cognitive Assistant Configuration
server:
  host: "0.0.0.0"
  port: 8080
  debug: false

ai:
  model_path: "./models/llama-2-7b-chat.gguf"
  max_tokens: 2048
  temperature: 0.7
  context_length: 4096

audio:
  input_device: "default"
  output_device: "default"
  sample_rate: 16000
  channels: 1

smart_home:
  enabled: true
  discovery_timeout: 30
  protocols:
    - "zigbee"
    - "wifi"
    - "bluetooth"

privacy:
  local_processing: true
  data_retention_days: 30
  encryption_enabled: true
  telemetry_enabled: false

logging:
  level: "INFO"
  file: "./logs/assistant.log"
  max_size_mb: 100`, 'config')}
                >
                  {copiedCode === 'config' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Support Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our community and support team are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub Issues
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Discord Community
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Email Support
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

export default DocsPage; 