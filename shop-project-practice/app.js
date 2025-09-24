const express = require('express');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('shop/products', {title: "Home Page"});
});

app.get('/products', (req, res) => {
    res.render('shop/products', {title: 'Products Page'})
});

app.get('/add-product', (req, res) => {
    res.render('shop/addProduct', {title: 'Add Product'})
});

app.get('/cart', (req, res) => {
    res.render('shop/cart', {title: 'Cart'});
});

app.get('/orders', (req, res) => {
    res.render('shop/orders', {title: 'Orders'})
})

app.get('/admin-products', (req, res) => {
    res.render('admin/adminProducts', {title: "test test es"});
});

app.listen(3000, () => {
    console.log("Sve radi bebiii")
});
