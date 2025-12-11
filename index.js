const express = require("express");
const app = express();

app
  .route("/about/mission")
  .get((req, res) => {
    res.send("Our mission is to provide quality service.qq");
  })
  .post((req, res) => {
    res.send("Mission statement updated.");
  })
  .put((req, res) => {
    res.send("Mission statement replaced.");
  })
  .delete((req, res) => {
    res.send("Mission statement deleted.");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
