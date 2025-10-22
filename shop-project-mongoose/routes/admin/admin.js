const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render('admin/add-product', {active: 'addProduct', title: 'Add Product'});
});

router.get('/admin-products', (req, res, next) => {
    res.render('admin/admin-products', {active: 'adminProducts', title: 'Admin Products'});
});

module.exports = router;