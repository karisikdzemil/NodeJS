const {getItems} = require("../models/product");

exports.getShop = (req, res) => {
    const items = getItems();
  res.render("shop", {
    isActive: "/shop",
    pageTitle: "Shop Page",
    prods: items,
  });
}