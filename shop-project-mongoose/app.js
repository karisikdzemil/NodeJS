const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res, next) => {
    res.render('shop/shop', {title: 'Shop', active: 'home' });
});

app.get('/products', (req, res, next) => {
    res.render('shop/products', {active: 'products', title: 'Products'});
});

app.get('/cart', (req, res, next) => {
    res.render('shop/cart', {active: 'cart', title: 'Cart'});
});

app.get('/orders', (req, res, next) => {
    res.render('shop/order', {active: 'orders', title: 'Order'});
});

app.get('/add-product', (req, res, next) => {
    res.render('admin/add-product', {active: 'addProduct', title: 'Add Product'});
});

app.get('/admin-products', (req, res, next) => {
    res.render('admin/admin-products', {active: 'adminProducts', title: 'Admin Products'});
});

app.listen(3000);