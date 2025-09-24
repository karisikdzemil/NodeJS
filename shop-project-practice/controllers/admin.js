
// GET admin products
exports.getAdminProducts = (req, res, next) => {
  res.render("admin/adminProducts", { title: "Admin Products", active: 'adminProducts' });
}

// POST product
exports.postProduct = (req, res, next) => {
  res.render("shop/addProduct", { title: "Add Product", active: 'addProduct' });
}

