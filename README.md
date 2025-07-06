# 🎬 POS – Backend API
---

## 🔧 Tech Stack

- **NestJS** – Scalable and modular backend framework
- **PostgreSQL** – Reliable and powerful relational database
- **Prisma** – Type-safe ORM for PostgreSQL
- **Docker** – Containerized environment for development and production

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+)
- Docker & Docker Compose
- pnpm (or npm/yarn)

### Clone the Repository

```bash
git clone https://github.com/technosavvyllc/pos-api.git
cd pos-api
pnpm install
```

### Configure Environment

Create a `.env` file in the root using the provided `.env.sample`:

```bash
cp .env.sample .env
```

Update the environment variables as needed.

---

## 🐳 Docker Setup

Start the app using Docker Compose:

```bash
docker compose up --build
```

---

## 🧬 Prisma

Generate the Prisma client:

```bash
pnpm run prisma:generate
```

Run database migrations:

```bash
pnpm run migrate:deploy
```

Seed the database:

```bash
pnpm run seed
```

---

## 🧪 Testing

### Unit Tests

```bash
pnpm run test
```

### Integration Tests

```bash
pnpm run test:int
```