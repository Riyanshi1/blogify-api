const express = require('express');
const app = express();
const PORT = 3000;

// MANDATORY: JSON middleware
app.use(express.json());

// IMPORT YOUR ROUTER
const blogRouter = require('./routes/blogRoutes');

// MOUNT IT
app.use('/api/v1/posts', blogRouter);

app.get('/', (req, res) => {
  res.send("Welcome to Blogify API!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
