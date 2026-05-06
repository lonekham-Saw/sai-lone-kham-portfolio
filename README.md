# Sai Lone Kham - Designer Portfolio

A professional, modern portfolio website showcasing graphic design work with a clean "SQUARE" aesthetic. Built with React, Vite, Tailwind CSS, and Framer Motion.

**Live Site**: [https://lonekham-Saw.github.io/sai-lone-kham-portfolio](https://lonekham-Saw.github.io/sai-lone-kham-portfolio)

**GitHub Repository**: [https://github.com/lonekham-Saw/sai-lone-kham-portfolio](https://github.com/lonekham-Saw/sai-lone-kham-portfolio)

---

## 🎨 Design Philosophy: SQUARE Minimalist

This portfolio follows a contemporary Swiss design approach with the following principles:

- **Sharp Geometry**: No rounded corners, clean 90-degree angles
- **Grid-Based Layout**: Strict columnar system for alignment and hierarchy
- **Intentional Whitespace**: Generous padding and margins for breathing room
- **Minimal Color Palette**: Monochromatic base (black, white, grays) with teal accents (#00B4D8)
- **Typography System**: 
  - **Playfair Display** (serif) for headings
  - **Inter** (sans-serif) for body text
  - **IBM Plex Mono** (monospace) for labels and metadata

---

## 📋 Features

✅ **Responsive Design** - Mobile-first approach with proper breakpoints
✅ **Featured Work Section** - 14 design projects with category filtering
✅ **Smooth Animations** - Framer Motion transitions and scroll effects
✅ **Professional Layout** - Asymmetric sections with alternating content alignment
✅ **Skills & Expertise** - Tools, specialties, and proficiency levels
✅ **Contact Section** - CTA buttons and social media links
✅ **Dark/Light Theme Ready** - CSS variables for easy theming
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **GitHub Pages Ready** - Automated deployment workflow

---

## 🚀 Quick Start

### Prerequisites
- Node.js 22+
- pnpm 10.4.1+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/lonekham-Saw/sai-lone-kham-portfolio.git
cd sai-lone-kham-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
sai-lone-kham-portfolio/
├── client/
│   ├── public/              # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   └── Home.tsx
│   │   ├── lib/             # Utilities and helpers
│   │   │   └── assets.ts    # Asset URLs and work data
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🎯 Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Type check
pnpm check

# Format code
pnpm format

# Deploy to GitHub Pages
pnpm deploy
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **TypeScript** | Type safety |
| **Wouter** | Client-side routing |
| **shadcn/ui** | UI component library |

---

## 🎨 Customization

### Update Profile Information

Edit `client/src/lib/assets.ts` to update:
- Profile image URL
- Work portfolio items
- Categories and descriptions

### Modify Colors

Edit `client/src/index.css` to change the color palette:
- Primary accent: `--primary: #00B4D8`
- Background: `--background: #FFFFFF`
- Foreground: `--foreground: #1A1A1A`

### Update Typography

Google Fonts are loaded in `client/index.html`. To change fonts:
1. Update the Google Fonts link
2. Modify font-family declarations in `client/src/index.css`

### Add New Sections

1. Create a new component in `client/src/components/`
2. Import it in `client/src/pages/Home.tsx`
3. Add it to the main layout

---

## 📸 Featured Work Section

The portfolio includes 14 design projects organized by category:
- Branding
- Graphic Design
- UI/UX
- Illustration
- Packaging
- Campaign
- Publication
- Web Design
- Logo
- Marketing

To add or modify projects, update the `works` array in `client/src/lib/assets.ts`.

---

## 🚀 Deployment

### GitHub Pages (Recommended)

The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `main` branch triggers GitHub Actions
2. **Manual Deployment**: Run `pnpm deploy` locally
3. **Live URL**: `https://lonekham-Saw.github.io/sai-lone-kham-portfolio`

#### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file:
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages on every push to `main`

#### Manual Steps (if needed)

```bash
# Build the project
pnpm build

# Deploy using gh-pages
pnpm deploy
```

### Other Hosting Options

The `dist/public` directory contains the production build and can be deployed to:
- Vercel
- Netlify
- Any static hosting service

---

## 📝 Environment Variables

The project uses environment variables for:
- `VITE_BASE_PATH`: Base path for GitHub Pages (set in GitHub Actions)
- Analytics endpoint (if enabled)

---

## 🔧 Development Tips

### Hot Module Replacement (HMR)
Vite provides instant updates during development. Changes to components, styles, or assets will reflect immediately in the browser.

### TypeScript Checking
Run `pnpm check` to verify TypeScript types before building.

### Code Formatting
Run `pnpm format` to automatically format code with Prettier.

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for these breakpoints.

---

## 🎬 Animation Details

The portfolio uses Framer Motion for:
- **Entrance Animations**: Fade-in + upward slide on page load
- **Scroll Interactions**: Fade-in as sections come into view
- **Hover Effects**: Subtle shadow elevation and opacity changes
- **Transitions**: 300ms ease-in-out for smooth state changes

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Port Already in Use
Vite will automatically find the next available port. Check the terminal output for the actual URL.

### GitHub Pages Not Updating
1. Verify the workflow ran successfully in GitHub Actions
2. Check that the `gh-pages` branch exists
3. Ensure GitHub Pages is enabled in repository settings

---

## 📄 License

MIT License - feel free to use this portfolio as a template for your own projects.

---

## 👤 About

**Sai Lone Kham** - Graphic Designer specializing in branding, UI/UX design, and creative visual design.

- **Email**: contact@example.com
- **GitHub**: [github.com/lonekham-Saw](https://github.com/lonekham-Saw)
- **Portfolio**: [lonekham-Saw.github.io/sai-lone-kham-portfolio](https://lonekham-Saw.github.io/sai-lone-kham-portfolio)

---

## 🙏 Acknowledgments

- Design inspired by contemporary Swiss design principles
- Built with React, Vite, and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Last Updated**: May 2026
