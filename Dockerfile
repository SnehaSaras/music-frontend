# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Install serve globally to serve the app in production
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 5000

# Serve the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
