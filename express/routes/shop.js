const path = require("path");

const express = require("express");

productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;