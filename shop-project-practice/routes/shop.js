const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

// GET shop products
router.get("/", shopController.getShop);

// GET products
router.get("/products", shopController.getProducts);

// GET cart
router.get("/cart", shopController.getCart);

// GET orders
router.get("/orders", shopController.getOrders);

// Get Product
router.get("/products/:prodId", shopController.getSingleProduct);

module.exports = router;