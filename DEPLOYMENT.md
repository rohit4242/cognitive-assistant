# Deployment Guide - Cognitive Assistant Website

This guide provides step-by-step instructions for deploying the Cognitive Assistant website to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- Git installed
- A hosting platform account (Vercel, Netlify, or similar)

## Quick Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

#### Option A: Deploy from GitHub
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy" and your site will be live in minutes

#### Option B: Deploy using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts to configure your deployment
```

### 2. Netlify

Deploy to Netlify for excellent static site hosting:

#### Option A: Drag and Drop
1. Build your project locally:
   ```bash
   npm run build
   npm run export  # If using static export
   ```
2. Go to [netlify.com](https://netlify.com) and drag the `out` folder to deploy

#### Option B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository in Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next` (or `out` for static export)

### 3. GitHub Pages (Static Export Only)

For static deployment to GitHub Pages:

1. Install the GitHub Pages deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to your `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. Update `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Environment Variables

If you need environment variables, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

For production deployment, add these variables in your hosting platform's dashboard.

## Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify
1. Go to "Site settings" → "Domain management"
2. Add custom domain
3. Configure DNS settings

## Performance Optimization

Before deploying, ensure optimal performance:

1. **Image Optimization**: All images are optimized using Next.js Image component
2. **Code Splitting**: Automatic with Next.js
3. **Minification**: Enabled by default in production builds
4. **Compression**: Enable gzip/brotli compression on your hosting platform

## SEO Configuration

The website includes:
- ✅ Meta tags and Open Graph data
- ✅ Sitemap.xml (`/public/sitemap.xml`)
- ✅ Robots.txt (`/public/robots.txt`)
- ✅ Structured data for better search engine understanding

## SSL Certificate

Most modern hosting platforms (Vercel, Netlify) provide automatic SSL certificates. Ensure HTTPS is enabled for:
- Better SEO rankings
- Security compliance
- Modern web standards

## Monitoring and Analytics

Consider adding:
- Google Analytics or privacy-focused alternatives
- Error monitoring (Sentry, LogRocket)
- Performance monitoring (Web Vitals)

## Build Commands Reference

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check for TypeScript errors: `npm run type-check`

2. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS classes
   - Verify dark mode functionality

3. **Performance Issues**
   - Optimize images and use Next.js Image component
   - Enable compression on hosting platform
   - Check for unused dependencies

### Support

If you encounter issues:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review hosting platform specific guides
- Contact support at rohitluni123@gmail.com

## Security Checklist

Before going live:
- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ No sensitive data in client-side code
- ✅ Privacy policy and legal pages complete
- ✅ Contact forms properly secured

## Post-Deployment

After successful deployment:
1. Test all pages and functionality
2. Verify mobile responsiveness
3. Check loading speeds
4. Test contact forms
5. Validate SEO meta tags
6. Submit sitemap to search engines

---

**Deployment Status**: Ready for production ✅

**Last Updated**: January 2024

**Maintainers**: Rohitkumar Luni & Ranchhod bhai Aal 