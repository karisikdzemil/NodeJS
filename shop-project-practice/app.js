const express = require('express');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render('shop/products');
});

app.get('/products', (req, res) => {
    res.render('shop/products')
});

app.get('/add-product', (req, res) => {
    res.render('shop/addProduct')
});

app.get('/admin-products', (req, res) => {
    res.render('admin/adminProducts');
});

app.listen(3000, () => {
    console.log("Sve radi bebiii")
});
