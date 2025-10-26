const express = require('express');
const shopController = require('../../controllers/shop');

const router = express.Router();

router.get('/', shopController.getShop);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postToCart);

router.get('/orders', shopController.getOrders);

router.post('/orders', shopController.postOrder);


module.exports = router;