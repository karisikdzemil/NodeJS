const express = require("express");
const path = require("path");

const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

router.use("/", (req, res) => {
    console.log(req.body);
    res.redirect("/users")
})

module.exports = router;