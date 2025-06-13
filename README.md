# Cognitive Assistant

A privacy-first AI assistant that operates entirely on your local device, providing real-time conversations, smart home control, and intelligent scheduling without compromising your privacy.

## 🚀 Features

- **Real-time Conversations**: Natural, contextual conversations with low-latency responses
- **Smart Home Control**: Seamless IoT device integration and voice commands
- **Intelligent Scheduling**: AI-powered calendar management with conflict resolution
- **Privacy-First Design**: All processing happens locally on your device
- **Offline Capability**: Full functionality without internet connection
- **OTA Updates**: Secure over-the-air updates for enhanced functionality

## 👥 Founders

- **Rohitkumar Luni** - Developer & Founder
  - Email: [rohitluni123@gmail.com](mailto:rohitluni123@gmail.com)
  - LinkedIn: [https://in.linkedin.com/in/rohit4242](https://in.linkedin.com/in/rohit4242)

- **Ranchhod bhai Aal** - Co-Founder
  - Email: [me@therencho.com](mailto:me@therencho.com)

## 🛠 Technology Stack

### Hardware
- **NVIDIA Jetson Nano**: High-performance AI computing platform
- **Edge Computing**: Local processing for real-time AI inference

### AI Models
- **Local LLMs**: Llama 2, Mistral 7B, Custom fine-tuned models
- **NLP Pipeline**: Intent recognition, entity extraction, sentiment analysis

### Connectivity
- **IoT Integration**: Zigbee, Z-Wave, WiFi, Bluetooth LE
- **Mesh Networking**: Thread, Matter compatible

### Software
- **Real-time OS**: Ubuntu 18.04 LTS with RT kernel
- **OTA Updates**: Encrypted, signed, atomic updates

### Web Interface
- **Next.js 15.3.3**: React-based framework
- **Tailwind CSS 4**: Modern styling
- **Framer Motion**: Smooth animations
- **TypeScript**: Type-safe development

## 🔒 Privacy & Security

- **Local Processing Only**: All AI processing happens on your device
- **No Cloud Dependencies**: Core functionality works completely offline
- **AES-256 Encryption**: Military-grade security for all local data
- **Zero Data Collection**: We don't collect, store, or analyze your personal data
- **Complete User Control**: You own and control all your data

## 📋 Legal Information

- [Privacy Policy](/privacy) - How we protect your privacy
- [Terms of Service](/terms) - Terms governing the use of our service
- [Cookie Policy](/cookies) - Our minimal cookie usage policy
- [License](/license) - Software licensing information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cognitive-assistant/website.git
cd cognitive-assistant
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project is optimized for deployment on modern hosting platforms:

- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Static site hosting with edge functions
- **Kinsta**: Application hosting with global CDN

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).

## 📁 Project Structure

```
cognitive-assistant/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── blog/            # Blog page with articles
│   │   ├── docs/            # Documentation page
│   │   ├── privacy/         # Privacy policy page
│   │   ├── terms/           # Terms of service page
│   │   ├── cookies/         # Cookie policy page
│   │   ├── license/         # License information page
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/              # UI components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── PrivacySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── globals.css      # Global styles
├── public/                  # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── DEPLOYMENT.md           # Deployment guide
└── README.md
```

## 🎨 Design System

The website uses a modern teal-based color palette:

- **Primary**: Teal-600 to Cyan-600
- **Secondary**: Emerald-500 to Teal-500
- **Accents**: Teal-500 to Cyan-500
- **Dark Mode**: Full support with automatic detection

## 🤝 Contributing

We welcome contributions to improve the Cognitive Assistant website. Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: [rohitluni123@gmail.com](mailto:rohitluni123@gmail.com)
- **LinkedIn**: [Rohitkumar Luni](https://in.linkedin.com/in/rohit4242)
- **GitHub**: [https://github.com/cognitive-assistant](https://github.com/cognitive-assistant)
- **Discord**: [https://discord.gg/cognitive-assistant](https://discord.gg/cognitive-assistant)

## 📄 License

This project is proprietary software developed by Rohitkumar Luni and Ranchhod bhai Aal. See the [License](/license) page for detailed information.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployment guide inspired by [Kinsta's Next.js tutorial](https://kinsta.com/blog/next-js-portfolio/)

---

© 2024 Cognitive Assistant by Rohitkumar Luni & Ranchhod bhai Aal. Made with ❤️ for privacy and AI.
