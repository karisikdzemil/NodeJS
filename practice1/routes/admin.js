const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
    res.render("add-product",  {isActive: "/add-product", pageTitle: "Product Page"});
});

const items = [];

router.post("/add-product", (req, res, next) => {
    items.push({username: req.body.username});
    res.redirect('/');
});

module.exports = {router, items};
