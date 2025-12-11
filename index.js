const express = require("express");
const app = express();
const blog = express();
const blogAdmin = express();

app.use("/blog", blog);
blog.use("/admin", blogAdmin);

app.get("/", (req, res) => {
  console.dir(blogAdmin.path());
  res.send("This is get request from home page");
});
0;
app.post("/", (req, res) => {
  const reqBody = req.body;
  console.log("Name from request body:", reqBody);
  res.send("This is post request from home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
