const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res, next) => {
    res.render('shop/shop', {active: 'home', title: 'Shop'});
});

app.get('/products', (req, res, next) => {
    res.render('products', {active: 'products', title: 'Products'});
});

app.get('/cart', (req, res, next) => {
    res.render('cart', {active: 'cart', title: 'Cart'});
});

app.get('/orders', (req, res, next) => {
    res.render('order', {active: 'order', title: 'Order'});
});

app.get('/add-product', (req, res, next) => {
    res.render('add-roduct', {active: 'add-product', title: 'Add Product'});
});

app.get('/admin-products', (req, res, next) => {
    res.render('admin-products', {active: 'admin-products', title: 'Admin Products'});
});

app.listen(3000);