FROM node:22.13.1-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (pnpm doesn't use package-lock.json)
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally before using it
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Generate Prisma client
RUN pnpm exec prisma generate

# Build the project
RUN pnpm run build

# Expose the application port
EXPOSE 80

# Set the entrypoint script
ENTRYPOINT [ "./entrypoint.sh" ]

# Command to start the application
CMD ["pnpm", "run", "start"]
