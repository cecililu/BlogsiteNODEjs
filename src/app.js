const express = require("express");
const { indexRouter } = require("./routes");
const dbConnect = require("./service/db");
const path = require("path");
const methodOverride=require('method-override')
const app = express();



const bodyParser = require("body-parser");
const getAllBlogs = require("./controllers/blog/get");
require('dotenv').config()
// const { get } = require("http");
const getOne = require("./controllers/blog/get-one");
const deleteBlog = require("./controllers/blog/delete");

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.use(methodOverride("_method"))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }))
app.use("/api/v1", indexRouter);
const PORT = process.env.PORT || 8000;

app.get("/", async(req, res) => {
  const blogs=  await getAllBlogs()
  res.render('main', { articles: blogs} );
});

app.get("/createblog", (req, res) => {
  res.render("index.ejs");
});

app.get("/:id",async(req, res) => {
  const { id } = req.params;
  // console.log(id)
  const blog=await getOne(id);
  
  res.render("read.ejs",{ blog:blog});
});

app.get( "/delete/:id", deleteBlog);

app.get( "/edit/:id" ,async(req,res)=>{

  const { id } = req.params;
  const blogs= await  getOne(id);
  console.log(blogs)
  res.render("edit.ejs",{ blogs });

});

// app.post("/createblogtest", (req, res) => {
//   console.log(req.body);
// });

// app.all("*", (req, res) => {
//   res.status(404).send({
//     data: "Route not found",
//   });
// });

dbConnect();

app.listen(PORT, () => console.log(`SERVER UP AND RUNNING: ${PORT}`));
