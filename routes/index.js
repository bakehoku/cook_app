const router = require("express").Router();

router.get("/", (req, res) => {
  const data = {
    user_id : 1
  };
  // data を ejs に渡す
  res.render("index.ejs", data);
});
//配列用：<%- include("item.ejs", items) %>

module.exports = router;