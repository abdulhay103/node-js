const express = require("express");
const handle = require("./handle");
const app = express();

app.locals.title = "My Express App";

app.use(express.json());

app.get("/", handle());

app.post("/", (req, res) => {
  const reqBody = req.body;

  console.log("Name from request body:", reqBody);
  res.send("This is post request from home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
