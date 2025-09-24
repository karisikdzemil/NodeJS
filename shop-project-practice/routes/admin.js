const adminController = require('../controllers/admin');

// GET products
app.get("/admin-products", adminController.getAdminProducts);

// POST product
app.get("/add-product", adminController.postProduct);