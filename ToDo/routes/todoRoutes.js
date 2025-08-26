const express = require("express");

const todoController = require("../controllers/todo");

const router = express.Router();

// GET add todo form
router.get("/add-todo", todoController.getAddTodo);

// GET all todo's
router.get("/all-todo", todoController.allTodo);

// POST new todo
router.post("/add-todo", todoController.postTodo);

// GET todo dynamic path

router.get("/todo/:id", todoController.getTodo);

// GET home page
router.get("/", todoController.getHome);




module.exports = router;