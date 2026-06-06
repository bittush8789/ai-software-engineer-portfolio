# Stage 1: Build the static Next.js application
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies based on package-lock.json
COPY package*.json ./
RUN npm ci

# Copy the rest of the application files and build
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:1.25-alpine

# Copy static build output to Nginx serve directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
