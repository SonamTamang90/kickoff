# 🏆 Kickoff

**The modern tournament management platform that replaces WhatsApp chaos and Excel nightmares with organized, professional tournament operations.**

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

---

## 🎯 The Problem

Tournament organizers are drowning in:
- 📱 **WhatsApp group chaos** with hundreds of unorganized messages
- 📊 **Excel spreadsheet hell** with version conflicts and manual updates  
- 🔄 **Manual coordination** between teams, schedules, and announcements
- 📋 **Lost documentation** scattered across different platforms
- ⏰ **Time-consuming administration** that kills the fun

## ✨ The Solution

**Kickoff** centralizes everything tournament organizers and teams need in one modern, intuitive platform:

### 🎪 For Tournament Organizers
- 📢 **Centralized Announcements** - Broadcast updates to all teams instantly
- 👥 **Team Management** - Track registrations, rosters, and contact details
- 🏟️ **Tournament Operations** - Manage brackets, schedules, and results
- 📊 **Real-time Dashboard** - Monitor tournament progress at a glance

### 🏃‍♂️ For Teams  
- 💬 **Team Chat** - Dedicated communication channels
- 📂 **Document Hub** - Share strategies, forms, and important files
- 👨‍👩‍👧‍👦 **Roster Management** - Track player availability and stats
- 🔔 **Smart Notifications** - Never miss important updates

### 🌐 For Everyone
- 🎫 **Public Tournament Pages** - Beautiful, shareable tournament showcases
- 📱 **Mobile-First Design** - Works seamlessly on all devices
- 🔒 **Secure & Private** - Your data stays protected

---

## 🚀 Key Features

| Feature | Description |
|---------|-------------|
| 🏆 **Tournament Management** | Complete bracket systems, scheduling, and result tracking |
| 👥 **Team Collaboration** | Built-in chat, file sharing, and roster management |
| 📢 **Announcement System** | Broadcast important updates to all participants |
| 📱 **Mobile Responsive** | Perfect experience on desktop, tablet, and mobile |
| 🔐 **Authentication** | Secure login with role-based access control |
| 📊 **Real-time Updates** | Live tournament progress and team communications |
| 🎨 **Modern UI** | Clean, intuitive interface built with Tailwind CSS |
| ⚡ **Lightning Fast** | Powered by Next.js 15 with Turbopack |

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - Latest React with concurrent features
- **[TypeScript](https://typescriptlang.org)** - Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first styling
- **[Turbopack](https://turbo.build/pack)** - Ultra-fast bundling

### Backend & Database
- **[Supabase](https://supabase.com)** - Backend-as-a-Service with PostgreSQL
- **API Routes** - Server-side functionality with Next.js

### Development
- **ESLint** - Code quality and consistency
- **Geist Font** - Modern typography by Vercel

---

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kickoff.git
cd kickoff

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Configure your Supabase credentials

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the magic happen! ✨

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production version |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure

```
kickoff/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/              # Protected dashboard routes
│   │   ├── organizer/            # Tournament organizer interface
│   │   │   ├── announcements/
│   │   │   ├── teams/
│   │   │   └── tournaments/
│   │   └── team/                 # Team management interface
│   │       ├── chat/
│   │       ├── documents/
│   │       └── roster/
│   ├── (public)/                 # Public tournament pages
│   │   ├── tournaments/
│   │   └── [tournamentId]/
│   ├── api/                      # API routes
│   │   └── webhooks/
│   └── layout.tsx                # Root layout
├── components/
│   ├── features/                 # Feature-specific components
│   └── ui/                       # Reusable UI components  
├── lib/
│   ├── supabase/                 # Database utilities
│   ├── types/                    # TypeScript definitions
│   ├── hooks/                    # Custom React hooks
│   └── utils/                    # Helper functions
└── styles/                       # Global styles
```

---

## 🗺️ Roadmap

### Phase 1: Core Platform ✅
- [x] Project setup and architecture
- [x] Authentication system
- [x] Basic routing structure
- [ ] Tournament creation and management
- [ ] Team registration and profiles

### Phase 2: Enhanced Features 🚧
- [ ] Real-time chat system
- [ ] File upload and document management
- [ ] Advanced bracket systems
- [ ] Mobile app (React Native)

### Phase 3: Advanced Analytics 📊
- [ ] Tournament statistics and insights
- [ ] Player performance tracking
- [ ] Automated reporting
- [ ] Integration APIs

### Phase 4: Enterprise Features 🏢
- [ ] Multi-organization support
- [ ] Advanced user roles and permissions
- [ ] White-label solutions
- [ ] Enterprise security features

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If Kickoff is helping organize your tournaments better, give us a ⭐️ on GitHub!

---

<div align="center">
  <p>Built with ❤️ by the Kickoff team</p>
  <p>
    <a href="https://kickoff.dev">Website</a> • 
    <a href="https://docs.kickoff.dev">Documentation</a> • 
    <a href="https://twitter.com/kickoffdev">Twitter</a> • 
    <a href="mailto:hello@kickoff.dev">Support</a>
  </p>
</div>