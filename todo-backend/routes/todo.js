const express = require('express');
const todoController = require('../controllers/todo');

const router = express.Router();

// router.get('/all-todos', todoController.getTodos);

router.post('/create-todo', todoController.postTodo);