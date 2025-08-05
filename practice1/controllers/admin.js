const { postItem } = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    isActive: "/add-product",
    pageTitle: "Product Page",
  });
}

exports.postProduct = (req, res) => {
  postItem({ username: req.body.username });
  res.redirect("/");
}