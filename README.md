# Coaching724

A scalable, secure, highly-profitable, enterprise-grade coaching platform built in plain React.

## Features

- 🚀 **Professional UI/UX**: Apple-grade design with glassmorphism and modern gradients
- 🔒 **Secure Authentication**: Supabase Auth with multiple providers and RBAC
- 📹 **Video Conferencing**: Integrated video sessions with recording
- 🤖 **AI Chatbot & Agents**: Multiple AI agents for different coaching functions
- 📅 **Scheduling & Appointments**: Calendar integration with timezone support
- 💰 **Payments & Billing**: Stripe integration for subscriptions and one-time payments
- 🔔 **Notifications & Reminders**: Email, SMS, and push notifications
- 🔍 **Search & Discovery**: Full-text search with filtering
- 🌐 **Localization**: Multi-language support with react-i18next
- 📱 **PWA**: Progressive Web App with offline capabilities
- 📊 **Analytics**: Comprehensive metrics and tracking

## Quick Start

### Prerequisites

- Node.js (v16+)
- pnpm (v7+)
- Docker & Docker Compose (optional)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coaching724.git
   cd coaching724
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

   Or with Docker:
   ```bash
   docker-compose up
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Setup

Copy the example environment file and update it with your own values:

```bash
cp .env.example .env.local
```

## Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the production build
- `pnpm lint`: Lint the codebase
- `pnpm test`: Run tests

## Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

