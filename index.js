const express = require("express");
const app = express();
const admin = express();

app.use(express.json());

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("This is the get request from admin dashboard");
});
app.get("/", (req, res) => {
  res.send("This is the get request from client page");
});

app.use("/admin", admin);

app.post("/", (req, res) => {
  const reqBody = req.body;
  console.log("Name from request body:", reqBody);
  res.send("This is post request from home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
