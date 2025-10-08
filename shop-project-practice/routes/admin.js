const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// GET products
router.get("/admin-products", adminController.getAdminProducts);

// get product
router.get("/add-product", adminController.getAddProduct);

// GET edit product
router.get('/add-product/:productId', adminController.getEditProduct);

// POST product
router.post("/add-product", adminController.postProduct);

// POST edit product
router.post('/edit-product', adminController.postEditProduct);

// POST delete product  
router.post('/admin-products', adminController.postDeleteProduct);

module.exports = router; 