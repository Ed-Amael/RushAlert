# 🚀 RushAlert - AI-Powered Stampede Prevention

RushAlert is an AI-powered crowd safety solution developed by a team from Vellore Institute of Technology, Andhra Pradesh, designed to prevent stampedes at large Indian events like Kumbh Mela, religious festivals, and public gatherings.

## 🎯 About RushAlert

RushAlert uses existing CCTV and drones to predict crowd risks in real-time, reducing response times by 50% and preventing 200-300 annual fatalities. Our solution provides:

- **Real-Time Alerts** - Instant SMS notifications to event safety coordinators and police
- **Heat Map Visualization** - Color-coded crowd density maps for proactive management  
- **50% Faster Responses** - Proven in pilots to save lives at events like Ganesh Chaturthi

## 🚀 Netlify Deployment

This landing page is optimized for Netlify hosting as a static site. You can deploy it in two ways:

### Method 1: Drag & Drop (Simplest)

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `.next` folder to your Netlify dashboard

### Method 2: GitHub Integration

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Netlify will automatically detect the Next.js configuration and deploy

## 📋 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Main landing page
│   ├── success/         # Form submission success page
│   └── layout.tsx       # Root layout with metadata
├── components/          # Reusable React components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions and configurations

public/
├── _redirects          # Netlify routing configuration
└── favicon.ico         # Site favicon
```

## 🎨 Features

### Landing Page Sections
- **Hero Section** - Features the RushAlert logo, tagline, and mission statement
- **Features Section** - Highlights three core functionalities with icons
- **Demo Request Form** - Netlify Forms-integrated contact form
- **Footer** - Contact information and social media links

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation
- **Netlify Forms** - Integrated form handling without backend
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Performance** - Optimized for fast loading and Core Web Vitals

## 🎯 Target Audience

RushAlert is designed for:
- **Government Agencies** - Mumbai Police, Uttar Pradesh Police
- **Event Organizers** - Celebration Event Management and similar companies
- **Secondary Segments** - Venue managers, security firms

## 🔧 Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify** - Static site hosting and form handling

## 📱 Design System

- **Colors**: Blue (#007bff) and white color scheme
- **Typography**: Inter font (similar to Arial/Open Sans)
- **Responsive**: Mobile-first with breakpoints for all devices
- **Accessibility**: WCAG compliant with proper contrast and navigation

## 🌐 Form Integration

The demo request form is integrated with Netlify Forms:
- Form name: `demo-request`
- Fields: Name, Email, Organization
- Success redirect: `/success`
- Data collection via Netlify dashboard

## 📞 Contact

- **Email**: info@rushalert.com
- **Phone**: 9876543210
- **LinkedIn**: https://linkedin.com/company/rushalert
- **Twitter**: https://twitter.com/rushalert

## 🤝 Development Team

Developed by students from Vellore Institute of Technology, Andhra Pradesh, with a mission to enhance public safety through AI-powered predictive analytics.

---

Built with ❤️ for public safety in India. Deployable on Netlify with drag-and-drop simplicity.
