const path = require("path");

const express = require("express");

const adminControler = require("../controllers/admin")

const router = express.Router();
 
// admin/add-product => GET
router.get("/add-product", adminControler.getAddProduct);

// admin/products => GET
router.get("/products");

// admin/add-product => POST
router.post("/add-product", adminControler.postAddProduct);

module.exports = router;
