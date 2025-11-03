const ToDo = require('../models/todo');


exports.postTodo = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    // const image = req.body.image;

    const todo = new ToDo({title: title, description: description})
    todo.save().then(result => {
        res.status(201).json({message: 'ToDo created!'})
    }).catch(err => console.log(err));
}