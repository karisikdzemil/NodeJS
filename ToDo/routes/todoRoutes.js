const express = require("express");

const todoController = require("../controllers/todo");

const router = express.Router();

// GET add todo form
router.get("/add-todo", todoController.getAddTodo);

// GET all todo's
router.get("/all-todo", todoController.allTodo);

// GET home page
router.get("/", todoController.getHome);

// POST new todo
router.post("/add-todo", todoController.postTodo);



module.exports = router;