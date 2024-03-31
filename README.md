# imgfx

Basic image processing web app, allowing for the removal of backgrounds of an uploaded image.

This repo includes a simple express app for serving the build in `server.js` and a Dockerfile used to containerise the application.

# ---

## To run the production build:

- Clone the repository

- `npm ci`

- `npx tailwindcss -i ./src/index.css -o ./src/output.css`

- `npm run build`

- `node server.js`

## To run locally in dev environment:

- Clone the repository

- `npm ci`

- `npx tailwindcss -i ./src/index.css -o ./src/output.css`

- `npm run dev`