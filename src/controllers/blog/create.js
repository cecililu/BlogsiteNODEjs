const { update } = require("../../model/blog");
const Blog = require("../../model/blog");

const createBlog = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).send({
      message: "Some fields are missing",
    });
  }

  try {
    const blogObj = new Blog({
      title,
      body,
      slug: "this is slug",
    });

    const blog = await blogObj.save();

    res.status(201).send({
      data: blog,
    });
  } catch (e) {
    res.status(400).send({
      data: e.message ? e.message : "Failed to create user",
    });
  }
};

module.exports = createBlog;
