# Build Stage
FROM node:22-alpine AS build
WORKDIR /app
# Copy package.json and install dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm@latest-10
RUN pnpm install
# Copy the rest of the application code
COPY . .
#Prepare Nuxt project
RUN npm run postinstall
# Build the Nuxt project
RUN npm run build

# Production Stage
FROM node:22-alpine
WORKDIR /app
# Only the .output folder is needed for the final app
COPY --from=build /app/.output/ ./
# Set necessary environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
# Command to start the Nuxt server
CMD ["node", "/app/server/index.mjs"]