const express = require("express");

const todoController = require("../controllers/todo");

const router = express.Router();

router.get("/add-todo", todoController.getAddTodo);
router.get("/all-todo", todoController.allTodo);
router.get("/", todoController.getHome);

module.exports = router;