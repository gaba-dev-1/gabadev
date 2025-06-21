# Gaba's Portfolio

A modern, interactive portfolio built with Next.js, Three.js, and Framer Motion featuring a nuanced purple theme.

## Features

- **Interactive 3D Scene**: Subtle Three.js animations with glass-morphism effects
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Automatic theme switching
- **Smooth Scrolling**: Enhanced user experience with Lenis
- **Contact Form**: Functional email integration
- **Performance Optimized**: Built for speed and accessibility

## Tech Stack

- Next.js 14
- TypeScript
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- Nodemailer
- React Hook Form + Zod

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set up environment variables:**
   Copy `.env.local` and update with your email credentials

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── layout/         # Header, footer
│   ├── sections/       # Page sections
│   ├── three/          # 3D components
│   ├── ui/             # UI components
│   └── providers/      # Context providers
├── lib/                # Utilities and data
└── public/             # Static assets
```

## Design Philosophy

This portfolio emphasizes **subtle elegance** over flashy effects:

- Nuanced purple color palette
- Gentle animations and transitions
- Glass-morphism and backdrop blur effects
- Minimal but impactful 3D elements
- Clean typography and spacing

## Performance

- Optimized Three.js rendering
- Dynamic imports for 3D components
- Efficient animation loops
- Responsive image loading
- Minimal bundle size

## Contact

Built by Sébastien Gimenez (Gaba)
- Email: contact@gabadev.com
- GitHub: github.com/gaba-dev-1
- Discord: https://discord.gg/gY5PsymH

## License

This project is personal portfolio code. Feel free to draw inspiration, but please don't copy it wholesale.
