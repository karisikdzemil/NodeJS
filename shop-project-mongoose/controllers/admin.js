const Product = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    active: "addProduct",
    title: "Add Product",
  });
};

exports.postProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  new Product({ title, price, description }).save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId.replace(":", "");
  console.log(prodId);
  Product.findOne({ _id: prodId })
    .then((product) => {
      res.render("admin/edit-product", {
        active: "addProduct",
        title: "Edit Product",
        prod: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const editTitle = req.body.title;
  const editPrice = req.body.price;
  const editDescription = req.body.description;

  Product.findByIdAndUpdate(prodId,     {
      title: editTitle,
      price: editPrice,
      description: editDescription,
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getAdminProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/admin-products", {
        active: "adminProducts",
        title: "Admin Products",
        prods: products,
      });
    })
    .catch((err) => console.log(err));
};
