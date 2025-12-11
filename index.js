const express = require("express");
const app = express();

app.use(express.json());

app.param("id", (req, res, next, id) => {
  const user = { id: id, name: "User" + id };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("User Details:", req.userDetails);
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
