const Product = require("../models/Product");

exports.getShop = (req, res, next) => {
  Product.find().then((products) => {
    res.render("shop/shop", { title: "Shop", active: "home", prods: products });
  });
};

exports.getProducts = (req, res, next) => {
  Product.find().then((products) => {
    res.render("shop/products", { title: "Products", active: "products", prods: products });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { active: "cart", title: "Cart" });
};

exports.postToCart = (req, res, next) => {
    console.log(req.body.name);
    res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render("shop/order", { active: "orders", title: "Order" });
};
