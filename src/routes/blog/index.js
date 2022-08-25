const express = require("express");
const createBlog = require("../../controllers/blog/create");
const deleteBlog = require("../../controllers/blog/delete");
const getAllBlogs = require("../../controllers/blog/get");
const getOne = require("../../controllers/blog/get-one");
const updateBlog = require("../../controllers/blog/update");

const router = express.Router();

router.post("/", createBlog); //create blog
router.get("/", getAllBlogs); //getallblog
router.get("/:id", getOne); //get one blog
router.patch("/:id", updateBlog); //update blog
router.delete("/:id", deleteBlog); //update blog


module.exports = { blogRouter: router };
