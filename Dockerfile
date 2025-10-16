# 1. Install dependencies
FROM oven/bun:1 as deps
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# 2. Build the app
FROM oven/bun:1 as builder
WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the source code
COPY . .

# Build the app
RUN bun run build

# 3. Run the app
FROM gcr.io/distroless/nodejs20-debian11
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy the standalone output
COPY --from=builder /app/.next/standalone ./
# Copy the public and static folders
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expose the port
EXPOSE 3000

# Start the app
CMD ["server.js"]
