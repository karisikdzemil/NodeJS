exports.getAddTodo =  (req, res, next) => {
    res.render("newTodo", {path: "/add-todo", title: "Add ToDo"})
};

exports.allTodo = (req, res, next) => {
    res.render("allTodos", {path: "/all-todo", title: "All ToDo's"})
}

exports.getHome = (req, res) => {
    res.render('home', {path: "/", title: "ToDo App"})
};