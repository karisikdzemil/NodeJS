const express = require("express");
const { body } = require("express-validator");
const todoController = require("../controllers/todo");

const router = express.Router();

router.get("/all-todos", todoController.getTodos);

router.post(
  "/create-todo",
  [
    body("title").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 10 }),
  ],
  todoController.postTodo
);

router.get("/edit-todo/:todoId", todoController.getEditTodo);

router.put(
  "/edit-todo/:todoId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 10 }),
  ],
  todoController.editTodo
);

router.delete("/delete-todo/:todoId", todoController.deleteTodo);

module.exports = router;
