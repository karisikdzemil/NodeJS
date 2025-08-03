const path = require("path");
const express = require("express");

const router = express.Router();
const users = [];

router.get("/users", (req, res, next) => {
    res.render("users", {listOfUsers: users, activePage: "users", pageTitle: "Users Page"})
});

router.post("/users", (req, res, next) => {
    users.push({username: req.body.username})
    res.render("users", {listOfUsers: users, activePage: "users", pageTitle: "Users Page"});
});

module.exports = router;