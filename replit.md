# Houseflow - Property Chain Management

## Overview

Houseflow is a web application for visualizing and managing property chains in real estate transactions. The application uses an Apple-inspired minimalist design aesthetic to present complex property chain relationships in a clean, intuitive interface. Users can track multiple properties in a chain, monitor their status (complete, incomplete, pending), and manage contact information for buyers, sellers, and agents across different estate agencies.

The application is currently in POC (proof of concept) stage with mock data functionality planned to be replaced with a real backend implementation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible, composable components following Apple's Human Interface Guidelines. The component library uses the "new-york" style variant with Tailwind CSS for styling.

**Design System**:
- Typography: SF Pro Display/Text font family with carefully defined scale (48px hero, 32px page titles, 24px sections, 16px body)
- Color palette: Neutral base with CSS variables for theming
- Spacing: Tailwind units (2, 4, 6, 8, 12, 16, 24) for consistent layout
- Custom cursive font (Dancing Script) for branding/logo elements

**Animation Library**: Framer Motion for page transitions, component animations, and micro-interactions. Used extensively for:
- Logo animation on app load
- Staggered house card reveals
- Chain link animations
- Sidebar slide-in transitions

**Routing**: Wouter for lightweight client-side routing (currently minimal with Home and NotFound routes).

**State Management**: 
- React hooks for local component state
- TanStack Query (React Query) for server state management and caching (configured but not yet fully integrated)
- Session-based authentication planned (infrastructure present but not implemented)

**Key Design Patterns**:
- Component composition with clear separation between presentational and container components
- Mock data layer (`mockData.ts`) serving as temporary data source until backend implementation
- Prop drilling for data flow (suitable for current scale, may need context/state management as complexity grows)

### Backend Architecture

**Server Framework**: Express.js on Node.js with TypeScript.

**API Structure**: RESTful API design with all routes prefixed with `/api` (routes currently stubbed in `server/routes.ts`).

**Current State**: Backend infrastructure is scaffolded but minimal:
- Storage interface defined (`IStorage`) with methods for user CRUD operations
- In-memory storage implementation (`MemStorage`) for development
- Session management prepared (express-session with connect-pg-simple for PostgreSQL session store)
- Authentication and authorization mechanisms not yet implemented

**Planned Backend Features**:
- User authentication and session management
- Property chain CRUD operations
- Contact management
- Estate agent tracking

### Data Storage Solutions

**Database**: PostgreSQL (configured via Neon serverless driver) with Drizzle ORM.

**Schema Design** (from `shared/schema.ts`):
- `users` table: Basic user authentication (id, username, password)
- Client-side TypeScript types for domain models:
  - `Chain`: Collection of houses in a property chain
  - `House`: Property with address, status, estate agent, and contacts
  - `Contact`: Person information with role (buyer/seller/agent)

**ORM Configuration**: Drizzle with schema-first approach, migrations stored in `./migrations`, configured for PostgreSQL dialect.

**Migration Strategy**: Schema changes managed via `drizzle-kit push` command.

**Data Access Pattern**: Storage interface abstraction allows swapping between in-memory (development) and database (production) implementations without changing business logic.

### Authentication & Authorization

**Current State**: Infrastructure prepared but not implemented:
- Express session configuration with PostgreSQL session store
- User schema with password field (hashing not implemented)
- Login UI component ready
- No password validation, hashing (bcrypt), or JWT implementation yet

**Planned Approach**: Session-based authentication with secure password hashing and HTTP-only cookies.

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, popover, select, tabs, toast, etc.)
- **shadcn/ui**: Pre-styled component collection built on Radix UI
- **class-variance-authority**: For component variant styling patterns
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Animation & Interaction
- **Framer Motion**: Production-ready animation library for React
- **Embla Carousel**: Carousel component library (available but not yet used)

### Form Management
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **Zod**: Schema validation integrated with Drizzle ORM (`drizzle-zod`)

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle ORM**: TypeScript ORM with schema migrations via `drizzle-kit`

### State & Data Fetching
- **TanStack Query (React Query)**: Server state management, caching, and synchronization

### Routing
- **Wouter**: Minimal React router (1.5KB alternative to React Router)

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **TypeScript**: Type safety across full stack
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Plugins**: Development banner, error overlay, and cartographer (development environment specific)

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional class name construction
- **cmdk**: Command palette component
- **Lucide React**: Icon library
- **nanoid**: Unique ID generation

### Build & Deployment
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development server
- Build outputs to `dist/` directory with separate public assets folder