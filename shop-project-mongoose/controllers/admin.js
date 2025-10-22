

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {active: 'addProduct', title: 'Add Product'});
}

exports.getAdminProducts = (req, res, next) => {
    res.render('admin/admin-products', {active: 'adminProducts', title: 'Admin Products'});
}