const express = require('express');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.send('Home')
});

app.get('/products', (req, res) => {
    res.render('shop/products')
});

app.get('/create-product', (req, res) => {
    res.send('Create product page')
});

app.listen(3000, () => {
    console.log("Sve radi bebiii")
});