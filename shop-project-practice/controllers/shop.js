const Product = require("../models/product");

// GET shop products
exports.getShop = (req, res, next) => {
  Product.findProducts().toArray()
    .then((products) => {
      console.log(products)
      res.render("shop/shop", {
        title: "Home Page",
        active: "home",
        prods: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET products
exports.getProducts = (req, res, next) => {
  Product.findProducts().toArray()
    .then((products) => {
      console.log(products)
      res.render("shop/products", {
        title: "Products Page",
        active: "products",
        prods: products,
      });
    })
    .catch((err) => {
      console.log(err);
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
