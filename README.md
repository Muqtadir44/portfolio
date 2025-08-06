# Modern Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for showcasing your skills as a Laravel and React developer.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Theme**: Beautiful dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for easy maintenance

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio!

## 🎨 Customization Guide

### Personal Information

Update your personal information in the following components:

#### Hero Section (`src/components/Hero.tsx`)
```typescript
// Update your name
<span className="gradient-text">Your Name</span>

// Update your title and description
<h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
  Software Engineer specializing in{' '}
  <span className="text-primary-400 font-semibold">PHP Laravel</span> &{' '}
  <span className="text-primary-400 font-semibold">React</span>
</h2>
```

#### About Section (`src/components/About.tsx`)
```typescript
// Update personal stats
const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Happy Clients', value: '8+' },
];

// Update personal info
<div>
  <span className="text-gray-400">Name:</span>
  <span className="text-white ml-2">Your Name</span>
</div>
<div>
  <span className="text-gray-400">Email:</span>
  <span className="text-white ml-2">your.email@example.com</span>
</div>
```

#### Contact Section (`src/components/Contact.tsx`)
```typescript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, Country',
    link: '#'
  }
];
```

### Skills & Experience

#### Skills (`src/components/Skills.tsx`)
Update your skill levels and categories:
```typescript
const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 85 },
      // Add more skills...
    ]
  }
];
```

#### Experience (`src/components/Experience.tsx`)
Update your work experience:
```typescript
const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Company Name',
    location: 'City, Country',
    period: '2023 - Present',
    description: 'Your job description...',
    technologies: ['Laravel', 'React', 'MySQL'],
    achievements: [
      'Your achievements...',
    ]
  }
];
```

### Projects

#### Projects (`src/components/Projects.tsx`)
Add your own projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'https://your-image-url.com',
    technologies: ['Laravel', 'React', 'MySQL'],
    category: 'fullstack',
    github: 'https://github.com/your-username/project',
    live: 'https://your-project-url.com',
    featured: true
  }
];
```

### Social Links

Update social media links in multiple components:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Colors & Theme

Customize the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your primary colors
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... customize your dark theme colors
  }
}
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Additional Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Custom Animations
Use Framer Motion for custom animations:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

### SEO Optimization
Update meta tags in `public/index.html`:
```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="Laravel, React, PHP, Developer" />
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ for the developer community** 