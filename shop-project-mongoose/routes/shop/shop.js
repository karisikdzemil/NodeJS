const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('shop/shop', {title: 'Shop', active: 'home' });
});

router.get('/products', (req, res, next) => {
    res.render('shop/products', {active: 'products', title: 'Products'});
});

router.get('/cart', (req, res, next) => {
    res.render('shop/cart', {active: 'cart', title: 'Cart'});
});

router.get('/orders', (req, res, next) => {
    res.render('shop/order', {active: 'orders', title: 'Order'});
});


module.exports = router;