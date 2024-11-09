# To-Do Lists API

A RESTful API for managing to-do lists built with NestJS and PostgreSQL.

## Prerequisites

- Node.js (v22.11.0)
- Docker
- pnpm (v9.7.0)

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Create `.env` file from `.env.example` in root directory:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/todo-lists
JWT_SECRET=your-secret-key
```

3. Make sure Docker Desktop is running and accessible & start PostgreSQL database:

```bash
docker compose up -d
```

4. Run database migrations:

```bash
pnpm migration:run
```

5. Start development server:

```bash
pnpm start:dev
```

The API will be available at http://localhost:3000

## API Documentation

Swagger documentation is available at http://localhost:3000/api

## Features

- User authentication with JWT
- Create, read, update and delete to-do lists
- Share lists with other users
- Create, read, update and delete list items
- Track list item status (pending, in progress, completed, cancelled)
- Set due dates for list items
