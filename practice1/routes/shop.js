const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/", shopController.getShop);

module.exports = router;
