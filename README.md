# Portfolio Website - React TypeScript

A modern, responsive portfolio website built with React and TypeScript, featuring night mode, interactive project cards, and smooth animations.

## 🚀 Features

### ✨ Interactive Project Modal
- Click on the "Completed" card to open a modal with project details
- Smooth ease-in animation
- Close with X button or click outside
- Project links to GitHub repositories

### 🌙 Night Mode Toggle
- Toggle between light and dark themes
- Smooth transitions
- Persists across all components
- Custom scrollbar styling for both themes

### 📱 Responsive Design
- Mobile-first approach
- Responsive navigation menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth scrolling navigation
- Hover effects and animations
- Typing effect for dynamic text

## 🛠️ Technical Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Inline Styles** - Component-scoped styling
- **CSS Animations** - Smooth transitions and effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react-typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio-react-typescript/
├── src/
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── components/
│   ├── Header.tsx        # Navigation with night mode toggle
│   ├── Home.tsx          # Hero section with typing effect
│   ├── About.tsx         # About section with skills
│   ├── Projects.tsx      # Projects section with interactive cards
│   ├── Contact.tsx       # Contact form and info
│   ├── Footer.tsx        # Footer with social links
│   └── ProjectModal.tsx  # Modal for project details
├── App.tsx               # Main app component
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🎯 Key Components

### App.tsx
- Main application component
- Manages global state (night mode, modal, active section)
- Handles scroll-based navigation highlighting

### Header.tsx
- Fixed navigation bar
- Night mode toggle button
- Responsive mobile menu
- Active section highlighting

### Projects.tsx
- Interactive project cards
- Click handler for "Completed" card
- Hover effects and animations

### ProjectModal.tsx
- Modal overlay with backdrop
- Project list with GitHub links
- Keyboard support (ESC to close)
- Click outside to close

## 🎨 Styling Approach

- **Inline Styles**: All styling uses React's inline style objects
- **CSS Variables**: Global CSS variables for consistent theming
- **Responsive Design**: Media queries for mobile-first approach
- **Smooth Transitions**: CSS transitions for all interactive elements

## 🌙 Night Mode Implementation

The night mode feature:
- Uses React state to track theme
- Applies conditional styling based on `isNightMode` prop
- Includes custom scrollbar styling for dark theme
- Smooth transitions between themes

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible hamburger menu
- **Adaptive Layouts**: Flexbox-based responsive grids
- **Touch-Friendly**: Appropriate button sizes and spacing
- **Breakpoints**: 900px and 540px for tablet and mobile

## 🚀 Build and Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Customization

### Adding Projects
Edit the `projects` array in `ProjectModal.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    link: 'https://github.com/your-repo',
    icon: '🚀'
  }
];
```

### Modifying Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --first-color: #your-color;
  --second-color: #your-color;
  /* ... other variables */
}
```

### Adding Sections
1. Create new component in `components/` directory
2. Add to `App.tsx` with proper props
3. Update navigation in `Header.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Osho Daniel**
- Email: danielosho327@gmail.com
- GitHub: [Khome2](https://github.com/Khome2)
- YouTube: [Khome CC](https://youtube.com/@khomecc)

---

Built with ❤️ using React and TypeScript