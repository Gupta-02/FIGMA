# Freelancer Portfolio - First Two Sections

A modern, responsive freelancer portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases the first two sections: Hero Banner and About Me.

## Features

- ✅ **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✅ **Next.js 14**: Latest Next.js with App Router
- ✅ **TypeScript**: Full type safety
- ✅ **Tailwind CSS**: Modern styling with custom design system
- ✅ **Modular Code**: Well-structured and maintainable components
- ✅ **Smooth Animations**: Subtle animations and transitions
- ✅ **Modern Design**: Clean, professional layout

## Design Features

### Hero Banner Section
- Responsive gradient text headline
- Floating background animations
- Mobile-first navigation with hamburger menu
- Call-to-action buttons with hover effects
<img width="1431" height="837" alt="image" src="https://github.com/user-attachments/assets/67f77b83-ae56-4a69-b445-bef093cb53f6" />


### About Me Section
- Profile image with gradient background effect
- Responsive layout that stacks on mobile
- Professional typography hierarchy
- Interactive elements with smooth transitions
<img width="1638" height="800" alt="image" src="https://github.com/user-attachments/assets/fe5fd7dc-e3f9-4373-beb9-d8417ab363eb" />


## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Montserrat (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── NavigationBar.tsx
│   ├── sections/
│   │   ├── HeroBannerSection.tsx
│   │   └── AboutMeSection.tsx
│   └── ui/
│       └── Button.tsx
└── lib/
    └── utils.ts
```

## Key Components

### NavigationBar
- Responsive navigation with mobile menu
- Smooth glass morphism effect
- Mobile-friendly hamburger menu

### HeroBannerSection  
- Animated gradient text
- Responsive typography scaling
- Floating background elements
<img width="1431" height="837" alt="image" src="https://github.com/user-attachments/assets/8971787d-91d9-487a-8fc4-57027d9eaec2" />

### AboutMeSection
- Flexible layout for different screen sizes
- Profile image with gradient backdrop
- Professional content presentation
<img width="1638" height="800" alt="image" src="https://github.com/user-attachments/assets/abf10731-21a0-4645-9afb-48fb3fb9fb44" />

### Button Component
- Multiple variants (primary, secondary, outline)
- Different sizes (sm, md, lg)
- Consistent hover and focus states

## Deployment

This project is optimized for deployment on Vercel or similar platforms:

1. Build the project: `npm run build`
2. Deploy to your preferred platform
3. The project uses static export configuration for maximum compatibility

## Customization

The design system is easily customizable through:
- Custom Tailwind colors in `tailwind.config.ts`
- Typography scales and spacing
- Component variants and sizes
- Animation and transition timings

## Performance Features

- Next.js App Router for optimal performance
- Static export for fast loading
- Optimized fonts and animations
- Responsive images and layouts
