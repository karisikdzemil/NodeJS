const ToDo = require("../models/todo");

exports.getTodos = (req, res, next) => {
    ToDo.find().then(todos => {
        res.status(200).json({message: "Todo's found!", todos: todos})
    }).catch(err => {
      if(!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.postTodo = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  // const image = req.body.image;

  const todo = new ToDo({ title: title, description: description });
  todo
    .save()
    .then((result) => {
      res.status(201).json({ message: "ToDo created!" });
    })
    .catch((err) => {
      if(!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};
