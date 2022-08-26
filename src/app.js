const express = require("express");
const { indexRouter } = require("./routes");
const dbConnect = require("./service/db");
const path = require("path");
const app = express();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");

app.use(express.static(staticPath));

app.use(express.json());
app.use(bodyParser.urlencoded())

app.use("/api/v1", indexRouter);

app.get("/", (req, res) => {
  // res.render("index.ejs");

  res.send({
    data: "Server running smooth",
  });
});

app.get("/createblog", (req, res) => {
  res.render("index.ejs");

});


// app.post("/createblogtest", (req, res) => {
//   console.log(req.body);
// });

app.all("*", (req, res) => {
  res.status(404).send({
    data: "Route not found",
  });
});

dbConnect();

app.listen(PORT, () => console.log(`SERVER UP AND RUNNING: ${PORT}`));
