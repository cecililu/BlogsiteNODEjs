const { update } = require("../../model/blog");
const Blog = require("../../model/blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return blogs
    // res.render('blogs.ejs', )
    res.status(200).send({
       blogs
    });
  } catch (e) {
    res.status(400).send({
      data: e.message ? e.message : "Failed to get blogs",
    });
  }
};

module.exports = getAllBlogs;