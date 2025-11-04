const ToDo = require("../models/todo");
const { validationResult } = require("express-validator");

exports.getTodos = (req, res, next) => {
  ToDo.find()
    .then((todos) => {
      res.status(200).json({ message: "Todo's found!", todos: todos });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postTodo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Wrong input");
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const description = req.body.description;
  // const image = req.body.image;

  const todo = new ToDo({ title: title, description: description });
  todo
    .save()
    .then((result) => {
      res.status(201).json({ message: "ToDo created!", todo: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getEditTodo = (req, res, next) => {
  const todoId = req.params.todoId;

  ToDo.findById(todoId)
    .then((todo) => {
      if (!todo) {
        const error = new Error("ToDo not found!");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "ToDo found!", todo: todo });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editTodo = (req, res, next) => {
  const todoId = req.params.todoId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Wrong input");
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const description = req.body.description;
  ToDo.findById(todoId)
    .then((todo) => {
      if (!todo) {
        const error = new Error("ToDo not found!");
        error.statusCode = 404;
        throw error;
      }
      todo.title = title;
      todo.description = description;
      return todo.save();
    })
    .then((result) => {
      res.status(200).json({ message: "ToDo edited!", todo: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteTodo = (req, res, next) => {
  const todoId = req.params.todoId;
  ToDo.findByIdAndDelete(todoId)
    .then((result) => {
      if (!result) {
        const error = new Error("ToDo not found!");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "ToDo deleted!", result: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
