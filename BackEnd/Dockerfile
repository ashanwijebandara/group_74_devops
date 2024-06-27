FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm install -g nodemon && \
    chmod +x ./node_modules/.bin/nodemon

# Optionally, handle index.js existence
COPY index.js ./ || echo "No index.js found"

EXPOSE 3001

CMD ["nodemon", "index.js"]
