# Basics
FROM node:19.2-alpine
WORKDIR /app

# Update the container
RUN apk --update --no-cache upgrade
RUN apk add openssl

# Configure the user
RUN chown node /app
USER node

# Create the SSL
RUN mkdir certs;
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -subj '/CN=localhost' \
    -keyout ./certs/server.key \
    -out ./certs/server.crt

# Install the project's dependencies
COPY --chown=node package.json .
RUN yarn

# Copy the project
COPY --chown=node tsconfig.json .
COPY --chown=node src ./src

# Run the project
CMD yarn run start:prod