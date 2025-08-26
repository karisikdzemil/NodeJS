const ToDo = require('../models/createTodo');

exports.getHome = (req, res) => {
    res.render('home', {path: "/", title: "ToDo App"})
};

exports.getAddTodo =  (req, res, next) => {
    res.render("newTodo", {path: "/add-todo", title: "Add ToDo"})
};

exports.allTodo = (req, res, next) => {
    ToDo.readTodos((todos) => {
    });
    res.render("allTodos", {path: "/all-todo", title: "All ToDo's"})
}


exports.postTodo = (req, res) => {
    const title = req.body.title;
    const desc = req.body.description
    const todo = new ToDo(title, desc);
    todo.save();
    res.redirect("/all-todo");
}