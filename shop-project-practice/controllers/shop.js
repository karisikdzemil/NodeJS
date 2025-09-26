const Product = require("../models/product");

// GET shop products
exports.getShop = (req, res, next) => {
  Product.getProducts((prods) => {
    res.render("shop/products", {
      title: "Home Page",
      active: "home",
      prods: prods,
    });
  });
};

// GET products
exports.getProducts = (req, res, next) => {
  Product.getProducts((prods) => {
    res.render("shop/products", {
      title: "Products Page",
      active: "products",
      prods: prods,
    });
  });
};

// GET cart
exports.getCart = (req, res, next) => {
  res.render("shop/cart", { title: "Cart", active: "cart" });
};

// GET orders
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { title: "Orders", active: "orders" });
};
