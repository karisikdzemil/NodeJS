const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("shop/products", { title: "Home Page", active: 'home' });
});

app.get("/products", (req, res) => {
  res.render("shop/products", { title: "Products Page", active: "products" });
});

app.get("/add-product", (req, res) => {
  res.render("shop/addProduct", { title: "Add Product", active: 'addProduct' });
});

app.get("/cart", (req, res) => {
  res.render("shop/cart", { title: "Cart", active: 'cart' });
});

app.get("/orders", (req, res) => {
  res.render("shop/orders", { title: "Orders", active: 'orders' });
});

app.get("/admin-products", (req, res) => {
  res.render("admin/adminProducts", { title: "Admin Products", active: 'adminProducts' });
});

app.listen(3000, () => {
  console.log("Sve radi bebiii");
});
