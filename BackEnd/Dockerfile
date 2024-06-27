FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies and set permissions
RUN npm install && \
    chmod +x ./node_modules/.bin/nodemon && \
    chmod +x ./index.js

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
