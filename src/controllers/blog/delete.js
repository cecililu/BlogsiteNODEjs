const { update, findOne } = require("../../model/blog");
const Blog = require("../../model/blog");

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const deletedValue = await Blog.findByIdAndDelete(id);

    if (!deletedValue) {
      return res.status(400).send({
        message: `${id} -  blog not found`,
      });
    }else{
      res.redirect('/allblogs')
    }

    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      data: e.message ? e.message : "Failed to get blogs",
    });
  }
};

module.exports = deleteBlog;
