const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// GET products
router.get("/admin-products", adminController.getAdminProducts);

// get product
router.get("/add-product", adminController.getAddProduct);

// POST product
router.post("/add-product", adminController.postProduct);

module.exports = router; 