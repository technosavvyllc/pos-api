# 🎬 Magic Movies AI – Backend API
**Magic Movies AI** is a platform that helps users bring their stories to life through a clean and simple interface. It allows users to create movies by breaking them down into scenes, sequences, and frames. Each frame serves as a visual prompt that can be sent to MidJourney to generate stunning AI images. Users can login, create projects, manage scenes and sequences, and explore visual storytelling with ease. Regenerating or varying images is just a click away, making the creative process fast and fun.

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