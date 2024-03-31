FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npx tailwindcss -i ./src/index.css -o ./src/output.css

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]