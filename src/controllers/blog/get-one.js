const { update, findOne } = require("../../model/blog");
const Blog = require("../../model/blog");

const getOne = async (id) => {
  // try {
    // find - get all, we can give condition, returns array
    // findOne - get one, we can gice condition, returns object
    // findById - get one, no condition, return object

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).send({
        message: `${id} -  blog not found`,
      });
    }
    return blog
  //   res.status(200).send({
  //      blog,
  //   });
  // } catch (e) {
  //   res.status(400).send({
  //     data: e.message ? e.message : "Failed to get blogs",
  //   });
   }


module.exports = getOne;
