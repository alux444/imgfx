FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx tailwindcss -i ./src/index.css -o ./src/output.css

RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]