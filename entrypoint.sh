#!/bin/sh

# Run Prisma migrations
echo "Running migrations..."
pnpm run migrate:deploy

# Run Prisma seed command
echo "Seeding database..."
pnpm run seed

# Start the application
exec "$@"
