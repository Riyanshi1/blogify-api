
// src/controllers/posts.controller.js

// Temporary in-memory "database"
const posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" }
];

// Utility response formatter
const makeResponse = (success, status, message, data = null, error = null, meta = null) => {
  return { success, status, message, data, error, meta };
};

exports.getAllPosts = (req, res) => {
  res.status(200).json(
    makeResponse(true, 200, "All posts fetched successfully", posts)
  );
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return res.status(404).json(
      makeResponse(false, 404, "Post not found", null, { code: "POST_NOT_FOUND" })
    );
  }

  res.status(200).json(
    makeResponse(true, 200, "Post fetched successfully", post)
  );
};
