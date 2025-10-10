const Product = require("../models/product");
const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database");

// GET admin products
exports.getAdminProducts = (req, res, next) => {
  Product.findProducts()
    .then((products) => {
      res.render("admin/adminProducts", {
        title: "Admin Products",
        active: "adminProducts",
        prods: products,
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/addProduct", {
    title: "Add Product",
    active: "addProduct",
    editing: false,
  });
};

// POST product
exports.postProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, price, description);
  product.saveProduct().then(result => {
    res.redirect("/");
  }).catch(err => console.log(err))
};

exports.postEditProduct = (req, res, next) => {
  const db = getDb(); // dodaj ovo
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  db.collection("products")
    .updateOne(
      { _id: new ObjectId(prodId) },
      {
        $set: {
          title: updatedTitle,
          price: updatedPrice,
          description: updatedDescription,
        },
      }
    )
    .then((result) => {
      console.log("✅ Product updated!");
      res.redirect("/admin-products");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const db = getDb();

  db.collection("products")
    .findOne({ _id: new ObjectId(prodId) })
    .then((product) => {
      if (!product) {
        return res.redirect("/products");
      }
      res.render("admin/addProduct", {
        title: "Edit Product",
        active: "addProduct",
        path: "/admin/edit-product",
        editing: true,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  Product.deleteProduct(req.body.prodId);
  res.redirect("/");
};
