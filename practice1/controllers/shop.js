const Product = require("../models/product");

exports.getShop = (req, res) => {
    Product.fetchAll((items) => {
        res.render("shop/index", {
          isActive: "/shop",
          pageTitle: "Shop Page",
          prods: items,
        });
    })
}

exports.getProducts = (req, res) => {
    Product.fetchAll((items) => {
        res.render("shop/products", {
          isActive: "/products",
          pageTitle: "Products Page",
          prods: items,
        });
    })
}

exports.getCart = (req, res) => {
        res.render("shop/cart", {
          isActive: "/cart",
          pageTitle: "Cart Page",
        });
}

exports.getOrders = (req, res) => {
        res.render("shop/orders", {
          isActive: "/orders",
          pageTitle: "Orders Page",
        });
}