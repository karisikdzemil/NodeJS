const express = require('express');
const todoController = require('../controllers/todo');

const router = express.Router();

router.get('/api/todo/all-todos', todoController.getTodos);

router.post('/api/todo/create-todo', todoController.postTodo);

router.get('/api/todo/edit-todo/:todoId', todoController.getEditTodo);

router.put('/api/todo/edit-todo/:todoId', todoController.editTodo);

router.delete('/api/todo/delete-todo/:todoId', todoController.deleteTodo);