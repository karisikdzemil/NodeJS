

exports.getShop = (req, res, next) => {
    res.render('shop/shop', {title: 'Shop', active: 'home' });
}

exports.getProducts = (req, res, next) => {
    res.render('shop/products', {active: 'products', title: 'Products'});
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {active: 'cart', title: 'Cart'});
}

exports.getOrders =  (req, res, next) => {
    res.render('shop/order', {active: 'orders', title: 'Order'});
}