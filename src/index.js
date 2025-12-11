const express = require("express");
const app = express();

app.use(express.json());

// Import the master router
const mainRouter = require("./routes/index");

// Mount versioned API
app.use("/api/v1", mainRouter);

// Health check route (optional)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blogify API is running",
  });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
