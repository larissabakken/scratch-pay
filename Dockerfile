# Defines the image to be used as base
FROM node:14

# Defines the working directory
WORKDIR /app

# Copies the package.json and yarn.lock files
COPY package*.json ./
COPY yarn.lock ./


# Installs the dependencies
RUN yarn install

# Copies the rest of the files
COPY . .

# Compiles the project
RUN yarn build

# Exposes the port 3003
EXPOSE 3003

# Defines the command to be executed when the container starts
CMD ["node", "./dist/src/index.js"]
