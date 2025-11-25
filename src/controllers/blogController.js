export function getAllBlogs(req, res) {
  res.status(200).json({
    message: "All blogs fetched successfully!",
  });
}

export function createBlog(req, res) {
  res.status(201).json({
    message: "Blog created successfully!",
    data: req.body
  });
}
