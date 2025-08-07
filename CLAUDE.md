# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a tournament management platform built with Next.js 15 and the App Router. The application is organized with route groups to separate different user experiences:

### Route Structure
- `app/(auth)/` - Authentication pages (login, register, forgot-password)
- `app/(dashboard)/organizer/` - Tournament organizer interface (announcements, teams, tournaments)  
- `app/(dashboard)/team/` - Team management interface (chat, documents, roster)
- `app/(public)/` - Public-facing tournament pages and tournament details
- `app/api/webhooks/` - API webhooks

### Key Directories
- `components/features/` - Feature-specific React components
- `components/ui/` - Reusable UI components
- `lib/supabase/` - Supabase client and database utilities
- `lib/types/` - TypeScript type definitions
- `lib/hooks/` - Custom React hooks
- `lib/utils/` - Utility functions

### Tech Stack
- Next.js 15 with App Router and Turbopack
- React 19
- TypeScript with strict mode
- Tailwind CSS v4
- ESLint with Next.js configuration
- Supabase (based on lib structure)

### File Conventions
- Uses TypeScript throughout
- Path alias `@/*` maps to root directory
- Geist font family (sans and mono variants)
- Component files use default exports
- Strict TypeScript configuration enabled