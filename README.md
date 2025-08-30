# ⚽ Kickoff - Landing Page & Authentication

**Modern landing page for soccer tournament organizers with beautiful sign in and sign up forms.**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)](https://react.dev)

---

## ⚽ About Kickoff

A clean, modern landing page for soccer tournament organizers featuring beautiful authentication forms. This project focuses solely on the frontend presentation and user registration interface.

### 🎯 Key Features

- **Modern Landing Page** - Eye-catching hero section showcasing tournaments
- **Authentication UI** - Beautiful sign in and sign up forms with validation
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Clean Interface** - Simple, focused user experience
- **Fast Performance** - Lightweight and optimized for speed

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd kickoff

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Development Commands

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 🏗️ Tech Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - Latest React with concurrent features
- **[TypeScript](https://typescriptlang.org)** - Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - Fast development bundling
- **[ESLint](https://eslint.org)** - Code linting and quality
- **Geist Font** - Modern typography (sans and mono)

---

## 📁 Project Structure

```
kickoff/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/                # Sign in page
│   │   ├── register/             # Sign up page
│   │   └── forgot-password/      # Password recovery
│   ├── (public)/                 # Public pages
│   │   └── page.tsx              # Landing page
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── auth/                     # Authentication components
│   ├── landing/                  # Landing page components
│   └── ui/                       # Reusable UI components
├── lib/                          # Utilities and configuration
│   ├── types/                    # TypeScript type definitions
│   ├── hooks/                    # Custom React hooks
│   └── utils/                    # Utility functions
└── public/                       # Static assets
    └── assets/                   # Images and icons
```

---

## 🎨 Features Overview

### 🏠 Landing Page
- **Hero Section** - Compelling introduction with soccer tournament imagery
- **Tournament Showcase** - Featured tournaments and highlights
- **Call-to-Action** - Prominent sign in and sign up buttons
- **Feature Overview** - Platform capabilities presentation
- **Footer** - Contact information and social links

### 🔐 Authentication System
- **Modern Sign In Form** - Clean, user-friendly login interface
- **Sign Up Form** - Tournament organizer registration with validation
- **Password Recovery** - Forgot password functionality
- **Form Validation** - Real-time input validation and error handling
- **Responsive Forms** - Mobile-optimized authentication experience

---

## 🎯 Use Cases

### Landing Page
- Showcase soccer tournament organization services
- Present platform features and benefits
- Drive user registration and engagement
- Provide clear calls-to-action for organizers

### Authentication
- Tournament organizer account creation
- Secure user login and registration
- Password recovery for existing users
- Form validation and user feedback

---

## 🌟 Design Highlights

- **Modern UI/UX** - Clean, professional interface design
- **Mobile-First** - Fully responsive across all devices
- **Dark Theme** - Modern dark interface with soccer-inspired colors
- **Fast Performance** - Optimized loading and smooth interactions
- **Accessibility** - WCAG compliant design patterns

---

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **[Vercel](https://vercel.com)** - Recommended for Next.js applications
- **[Netlify](https://netlify.com)** - Static site hosting
- **[Railway](https://railway.app)** - Full-stack deployment

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

---

## 🤝 Contributing

This is a landing page and authentication UI for soccer tournament organizers. Feel free to contribute by:

1. Reporting bugs and issues
2. Suggesting UI/UX improvements
3. Improving documentation
4. Submitting pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><strong>⚽ Modern Landing Page for Soccer Tournament Organizers</strong></p>
  <p>Beautiful design meets seamless authentication</p>
</div>