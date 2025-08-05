const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin");

router.get("/", (req, res) => {
  res.render("shop", {
    isActive: "/shop",
    pageTitle: "Shop Page",
    prods: adminRoutes.items,
  });
});

module.exports = router;
