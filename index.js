const exprees = require("express");
const app = exprees();

app.get("/", (req, res) => {
  res.send("This is the get request from home page");
});

app.post("/form", (req, res) => {
  res.send("This is post request from home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
