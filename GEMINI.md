# GEMINI.md - Contextual Context for TODO-APP

This file serves as a guide for Gemini CLI to understand the project structure, development workflow, and technical stack of the `todo-app`.

## Project Overview

- **Name:** todo-app
- **Purpose:** A server-side TODO application.
- **Main Technologies:**
    - **Framework:** [NestJS](https://nestjs.com/) (v11)
    - **Language:** TypeScript
    - **ORM:** [Prisma](https://www.prisma.io/)
    - **Database:** PostgreSQL (implied by Prisma datasource provider)
    - **Test Runner:** Jest
    - **Linting & Formatting:** ESLint, Prettier

## Architecture

The project follows the standard NestJS modular architecture:
- **`src/`**: Main source code.
    - `main.ts`: Entry point.
    - `app.module.ts`: Root module.
    - `app.controller.ts`: App-level controllers.
    - `app.service.ts`: App-level business logic.
- **`prisma/`**: Database schema and migrations.
    - `schema.prisma`: Main Prisma schema configuration.
    - `models/`: Directory containing split Prisma models (`user.prisma`, `task.prisma`).
    - `prisma.config.ts`: Prisma configuration for split schemas.
- **`test/`**: End-to-end test files.

## Database Schema (Prisma)

- **User**: Represents a user in the system.
- **Task**: Represents a task with fields like `title`, `description`, `status` (`TODO`, `DOING`, `DONE`), and an association to a `User`.

## Prisma Client

- **Generation:** The Prisma Client is generated using the `prisma-client` provider.
- **Output Path:** The client is generated into `src/generated/prisma`.
- **Note:** Ensure that `npx prisma generate` is run after schema changes to update the client.

## Building and Running

### Development
```bash
# Install dependencies
npm install

# Run in watch mode
npm run start:dev

# Run Prisma migrations
npx prisma migrate dev
```

### Production
```bash
# Build the project
npm run build

# Run in production mode
npm run start:prod
```

### Testing
```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Development Conventions

- **Coding Style:** Adheres to standard NestJS/TypeScript patterns. Uses ESLint and Prettier for consistency.
- **Prisma Split Models:** The project uses a split schema approach where individual models are located in `prisma/models/`.
- **E2E Testing:** Uses Supertest and Jest for integration tests in the `test/` directory.
- **Type Safety:** Strong TypeScript usage with strict null checks (per `tsconfig.json`).
