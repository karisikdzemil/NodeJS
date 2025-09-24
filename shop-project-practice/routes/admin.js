const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// GET products
router.get("/admin-products", adminController.getAdminProducts);

// POST product
router.get("/add-product", adminController.postProduct);

module.exports = router; 