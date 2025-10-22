const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {active: 'addProduct', title: 'Add Product'});
}

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    new Product({title, price, description}).save()
        res.redirect('/');
    
}

exports.getAdminProducts = (req, res, next) => {
    res.render('admin/admin-products', {active: 'adminProducts', title: 'Admin Products'});
}
