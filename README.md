# TODO-APP

A robust server-side TODO application built with [NestJS](https://nestjs.com/) and [Prisma ORM](https://www.prisma.io/).

## Project Overview

This application provides a RESTful API for managing users and their associated tasks. It features a modular architecture, strong type safety with TypeScript, and a relational database schema managed by Prisma.

### Key Features
- **User Management**: Create and find users with password hashing (bcrypt).
- **Task Management**: Create and track tasks with status updates (`TODO`, `DOING`, `DONE`).
- **Relational Data**: Tasks are associated with specific users.
- **Database Migrations**: Schema changes tracked and applied via Prisma.
- **Modular Design**: Separate modules for Users, Tasks, and Database logic.

## Technical Stack

- **Framework**: NestJS (v11)
- **Language**: TypeScript
- **ORM**: Prisma (v7+)
- **Database**: PostgreSQL
- **Security**: Bcrypt for password hashing
- **Testing**: Jest for unit and E2E testing
- **Linting**: ESLint & Prettier

## Architecture & Models

The project uses a split Prisma schema approach where models are defined in `prisma/models/`.

### User Model
- `id`: Unique identifier (Auto-increment)
- `email`: Unique email address
- `username`: Optional display name
- `password`: Hashed password
- `tasks`: Relation to the Task model

### Task Model
- `id`: Unique identifier (Auto-increment)
- `title`: Task title
- `description`: Detailed description
- `status`: Task status (`TODO`, `DOING`, `DONE`)
- `assignUser`: Name of the assigned person
- `userId`: Foreign key to the User model

## Getting Started

### Prerequisites
- Node.js (v20+)
- npm
- PostgreSQL database instance

### Installation

1. Clone the repository:
   ```bash
   $ git clone <repository-url>
   $ cd todo-app
   ```

2. Install dependencies:
   ```bash
   $ npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
   ```

4. Generate Prisma Client:
   ```bash
   $ npx prisma generate
   ```

5. Run database migrations:
   ```bash
   $ npx prisma migrate dev
   ```

## Running the App

```bash
# development
$ npm run start

# watch mode (development)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Documentation (Endpoints)

### Users
- `GET /users`: Retrieve all users (supports pagination).
- `POST /users`: Create a new user.
- `GET /users/:id`: Find a specific user by ID.

### Tasks
- `GET /tasks`: Retrieve all tasks.
- `POST /tasks`: Create a new task (can be linked to a user).

## License

This project is [UNLICENSED](LICENSE).
