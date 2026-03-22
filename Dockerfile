# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /docs-site

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the documentation site
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /docs-site

# Install serve globally
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /docs-site/build ./build
COPY --from=builder /docs-site/package.json ./

# Expose the documentation port
EXPOSE 3001

# Start the documentation server
CMD ["serve", "-s", "build", "-l", "3001"] 
