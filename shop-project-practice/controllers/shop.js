const Product = require("../models/product");
const getDb = require('../util/database').getDb;
const {ObjectId} = require('mongodb');

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

// GET product
exports.getSingleProduct = (req, res, next) => {
  const db = getDb();
  const prodId = req.params.prodId;
  db.collection('products').findOne({_id: new ObjectId(prodId)}).then(product => {
    console.log(prodId)
    res.render('shop/product', {title: "Product",active: 'home', prod: product});
  }).catch(err => console.log(err));
}

// GET cart
exports.getCart = (req, res, next) => {
  res.render("shop/cart", { title: "Cart", active: "cart" });
};

// GET orders
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { title: "Orders", active: "orders" });
};
