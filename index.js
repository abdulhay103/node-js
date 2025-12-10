const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public/`, { index: "home.html" }));

app.get("/", (req, res) => {
  res.send("This is the get request from home page");
});

app.post("/", (req, res) => {
  const reqBody = req.body;

  console.log("Name from request body:", reqBody);
  res.send("This is post request from home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
