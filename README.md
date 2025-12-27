# Toh Yan Hui Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Tailwind CSS** for styling
- 🌓 **Dark Mode** with system preference detection
- 📱 **Fully Responsive** design
- ✨ **Smooth Animations** and transitions
- 📧 **Contact Form** with EmailJS integration
- 🎯 **TypeScript** for type safety

## Project Structure

```
nextjs-portfolio/
├── src/
│   └── app/
│       ├── components/         # React components
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── Features.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Projects.tsx
│       │   ├── Contact.tsx
│       │   ├── Footer.tsx
│       │   ├── ThemeToggle.tsx
│       │   ├── MobileMenu.tsx
│       │   ├── TerminalAnimation.tsx
│       │   └── ScrollAnimations.tsx
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout
│       └── page.tsx           # Home page
├── public/                    # Static assets
└── tailwind.config.js        # Tailwind configuration
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Configure your EmailJS credentials in `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id_here
```

You can get these credentials by signing up at [EmailJS](https://www.emailjs.com/).

### Installation & Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
