const handle = () => (req, res) => {
  console.log("App Title:", req.app.locals.title);
  res.send("This is the get request from home page");
};
module.exports = handle;
