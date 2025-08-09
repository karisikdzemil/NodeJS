const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    isActive: "/add-product",
    pageTitle: "Product Page",
  });
}

exports.postProduct = (req, res) => {
    const title = req.body.title;
    const product = new Product(title);
    product.save();
    res.redirect("/");
} 