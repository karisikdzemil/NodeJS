const Product = require("../models/product");

exports.getShop = (req, res) => {
    Product.fetchAll((items) => {
        res.render("shop", {
          isActive: "/shop",
          pageTitle: "Shop Page",
          prods: items,
        });
    })
}