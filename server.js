import express from "express";
import path from "path";

const app = express();

// Serve static files from the React app
app.use(express.static(path.join('./dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join('./dist/index.html'));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});