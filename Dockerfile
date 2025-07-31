FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# Copy source files
FROM deps AS builder
COPY . .
RUN pnpm install -r --offline
RUN pnpm --filter @coaching724/web build

# Production image
FROM nginx:alpine AS runner
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
