# Zardron Pesquera - Portfolio Website

A modern, interactive portfolio website showcasing the work and experience of Zardron Angelo G. Pesquera, a Full Stack Developer specializing in React, Node.js, and cutting-edge web technologies including Web 3D, AR, and VR.

## ✨ Features

- **Interactive 3D Animations**: Immersive black hole animations using Three.js and React Three Fiber
- **Animated Star Background**: Dynamic particle effects using TSParticles
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Smooth Animations**: Page transitions and interactions powered by Framer Motion
- **Portfolio Sections**:
  - Hero section with animated introduction
  - About Me with skills and expertise
  - Work Experience showcasing projects from various companies
  - Resume section with detailed professional history
  - Blog section with technical articles
  - Contact form for inquiries
- **Dark Theme**: Modern dark UI with gradient accents
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### UI & Animations
- **@heroicons/react** - Icon library
- **react-icons** - Additional icon set
- **animate.css** - CSS animation library
- **@tsparticles/react** - Particle effects
- **react-type-animation** - Typing animation effects

### Utilities
- **react-toastify** - Toast notifications
- **react-spinners** - Loading spinners

## 📁 Project Structure

```
zardron-portfolio/
├── public/
│   ├── logo.png
│   └── resume.html
├── src/
│   ├── assets/
│   │   ├── icons/          # App icons and menu icons
│   │   ├── menu-icon/       # Navigation menu icons
│   │   ├── social-icons/   # Social media icons
│   │   ├── tech-stack/     # Technology logos
│   │   └── works/          # Project screenshots
│   ├── components/
│   │   ├── BlackHole.jsx           # 3D black hole animation
│   │   ├── BlackHoleMiddle.jsx      # Middle section black hole
│   │   ├── Button.jsx               # Reusable button component
│   │   ├── FloatingMobileMenu.jsx  # Mobile navigation menu
│   │   ├── Footer.jsx               # Site footer
│   │   ├── Menu.jsx                 # Navigation menu
│   │   ├── particles.jsx            # Particle effects
│   │   ├── profile/                 # Profile components
│   │   ├── ScrollToTop.jsx          # Scroll to top button
│   │   ├── StarBackground.jsx       # Animated star field
│   │   └── Transition.jsx            # Page transitions
│   ├── pages/
│   │   ├── about/          # About page components
│   │   ├── blogs/          # Blog listing and articles
│   │   ├── contact/        # Contact form
│   │   ├── dashboard/      # Admin dashboard
│   │   ├── resume/         # Resume page components
│   │   └── works/          # Portfolio projects
│   ├── data.js             # Experience and blog data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── utils/
│   └── motion.js           # Framer Motion variants
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zardron-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Components

### 3D Animations
- **BlackHole.jsx**: Interactive 3D black hole visualization using Three.js
- **BlackHoleMiddle.jsx**: Middle section black hole effect
- **StarBackground.jsx**: Animated star field background using TSParticles

### Pages
- **Home**: Hero section with animated introduction and navigation
- **About**: Skills, expertise, and professional background
- **Works**: Portfolio projects from various companies (Nagarro, RipeConcepts, RAKtherm, etc.)
- **Resume**: Detailed professional experience and education
- **Blogs**: Technical articles on web development topics
- **Contact**: Contact form for inquiries

## 🏢 Work Experience

The portfolio showcases experience from:
- **Freelance** - Full-Stack Developer (Current)
- **Nagarro** - Senior Engineer
- **RipeConcepts** - Senior Application Developer
- **RAKtherm Global** - Web Developer
- **Clockwork Logistics** - ReactJs Developer
- **Accenture** - Software Engineer
- **Lear Corporation** - Web Developer

## 🎯 Technologies & Skills

### Frontend
- React.js, Next.js
- TypeScript, JavaScript
- HTML5, CSS3, SCSS
- Tailwind CSS, Bootstrap
- Three.js, WebGL
- TanStack Query, Redux
- Shadcn/ui, Radix UI

### Backend
- Node.js, Express.js
- GraphQL, REST APIs
- MongoDB, MySQL, PostgreSQL
- Supabase
- PHP, Laravel
- ASP.NET, C#

### Tools & Platforms
- Git, GitHub, GitLab
- Docker
- Jira
- Figma, Adobe Creative Suite
- Unreal Engine, 8th Wall

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)
- Ultra-wide displays (1536px+)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

### Recommended Hosting Platforms

- **Vercel** - Optimized for React/Vite projects
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 📄 Resume Generation

The project includes a resume generator. See `RESUME_README.md` for detailed instructions on generating a PDF resume from the portfolio data.

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` includes:
- Extended color palette
- Custom spacing and sizing
- Responsive breakpoints
- Dark mode support

### Vite
Configuration in `vite.config.js`:
- React SWC plugin for fast refresh
- Base path configuration
- Build optimization settings

## 📝 Data Management

Portfolio data (experience, blogs) is managed in `src/data.js`:
- `EXPERIENCE` array - Work history and responsibilities
- `BLOGS` array - Blog posts with content and metadata

## 🎭 Customization

To customize the portfolio:

1. **Update personal information**: Edit `src/data.js`
2. **Modify colors**: Update `tailwind.config.js` and component styles
3. **Add projects**: Add entries to the works section in `src/pages/works/`
4. **Update blog posts**: Modify the `BLOGS` array in `src/data.js`
5. **Change animations**: Adjust Framer Motion variants in `utils/motion.js`

## 📞 Contact

- **Email**: zardron.pesquera1993@gmail.com
- **Phone**: +63 976 218 5524
- **Location**: Lapu-Lapu City, Cebu, Philippines

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Three.js community for excellent 3D web graphics resources
- Framer Motion for smooth animation capabilities
- Vite team for the blazing-fast build tool
- All the open-source contributors whose libraries made this project possible

---

**Built with ❤️ by Zardron Pesquera**

*Last updated: January 2025*
