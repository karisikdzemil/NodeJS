const Product = require('../models/product');

// GET admin products
exports.getAdminProducts = (req, res, next) => {
  res.render("admin/adminProducts", { title: "Admin Products", active: 'adminProducts' });
}

exports.getAddProduct = (req, res, next) => {
  res.render("admin/addProduct", { title: "Add Product", active: 'addProduct' });
}

// POST product
exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, price, description);
    product.saveProduct();
  res.redirect('/');
}

