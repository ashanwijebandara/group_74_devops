FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies and fix permissions
RUN npm install && \
    chmod +x ./node_modules/.bin/nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
