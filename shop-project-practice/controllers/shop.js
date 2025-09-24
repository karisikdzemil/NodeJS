
// GET shop products
exports.getShop = (req, res, next) => {
  res.render("shop/products", { title: "Home Page", active: 'home' });
}

// GET products
exports.getProducts = (req, res, next) => {
  res.render("shop/products", { title: "Products Page", active: "products" });
}

// GET cart
exports.getCart = (req, res, next) => {
  res.render("shop/cart", { title: "Cart", active: 'cart' });
}

// GET orders
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { title: "Orders", active: 'orders' });
}