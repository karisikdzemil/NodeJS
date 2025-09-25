
// GET admin products
exports.getAdminProducts = (req, res, next) => {
  res.render("admin/adminProducts", { title: "Admin Products", active: 'adminProducts' });
}

exports.getAddProduct = (req, res, next) => {
  res.render("admin/addProduct", { title: "Add Product", active: 'addProduct' });
}

// POST product
exports.postProduct = (req, res, next) => {
    console.log(req.body)
  res.redirect('/');
}

