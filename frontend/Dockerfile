# Step 1: Build the Angular app
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json .

# Install project dependencies
RUN npm ci

# Copy the rest of the Angular project files
COPY . .

# Expose port 4200 for the app
EXPOSE 4200

# Start npm server
CMD ["npm", "run", "docker"]
