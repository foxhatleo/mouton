# Mouton 🐑

[English](README.md) | [简体中文](README-Chinese.md)

A modern, bilingual personal portfolio website built with Next.js and React. Features an interactive avatar, smooth animations, and responsive design across multiple projects and languages.

## ✨ Features

- **🌐 Internationalization** - Full bilingual support (English & Chinese) with locale-aware routing
- **⚡ Performance** - Built with Next.js 15 and Turbopack for lightning-fast builds
- **🎨 Modern UI** - Custom animations, interactive avatar, and responsive design
- **📱 Responsive** - Optimized for all device sizes
- **♿ Accessible** - WCAG-compliant with proper ARIA labels and semantic HTML
- **🔍 SEO Optimized** - Open Graph tags, Twitter Cards, and comprehensive metadata
- **✅ Type Safe** - Full TypeScript coverage with strict type checking
- **🧪 Tested** - Vitest and React Testing Library setup
- **🔧 Automated** - CI/CD with GitHub Actions for version management and code formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19
- **Styling**: Styled JSX
- **Internationalization**: next-intl
- **Animation**: GSAP
- **Linting/Formatting**: Biome
- **Testing**: Vitest + React Testing Library
- **Package Manager**: Yarn 4 (Berry)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x
- Yarn 4.10.3 or higher

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page will automatically reload when you make changes.

### Available Scripts

```bash
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run Biome linter
yarn test         # Run tests
yarn test:watch   # Run tests in watch mode
yarn test:coverage # Run tests with coverage report
```

## 📁 Project Structure

```
mouton/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── constants/        # Constants and configuration
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization setup
│   ├── messages/         # Translation files
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── public/               # Static assets
├── i18n/                 # Root-level i18n configuration
└── .github/workflows/    # GitHub Actions workflows
```

## 🎯 Key Features Explained

### Interactive Avatar
The homepage features an interactive avatar component that responds to user interactions with animations and video playback.

### Project Showcase
Each project has its own dedicated page with:
- Image carousels with swipe navigation
- Detailed descriptions in multiple languages
- Links to demos, repositories, and documentation

### Automated Workflows
The repository includes GitHub Actions workflows that:
- Automatically update package version with commit timestamps
- Run Biome to format and lint code
- Handle race conditions for concurrent commits

## 🔧 Development

### Code Style
This project uses [Biome](https://biomejs.dev/) for both linting and formatting. The configuration enforces:
- Accessibility (a11y) best practices
- Security rules
- Consistent code formatting

### Testing
Tests are set up with Vitest and React Testing Library. Example tests are provided for utility functions.

### Type Safety
The project uses strict TypeScript configuration with:
- Modern ES2022 target
- Strict type checking
- Path aliases for cleaner imports

## 📝 License

This project is licensed under the Apache License, version 2.0.

## 📖 About the Name

The name "Mouton" (French for "sheep") is a reference to Antoine de Saint-Exupéry's timeless classic, *Le Petit Prince*. Just as the little prince draws a sheep in a box, inviting us to use our imagination, this project aims to create something simple yet meaningful—a personal space on the web that reflects creativity and wonder.

## 🙏 Acknowledgments

Built with modern web technologies and best practices. The codebase prioritizes maintainability, performance, and user experience.

---

**Note**: This is an open-source personal project. Contributions, feedback, and suggestions are welcome!
