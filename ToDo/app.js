const express = require('express');

const app = express();


app.set("view engine", "ejs");
app.set("views, views");

app.use(express.static("public"));

app.get("/add-todo", (req, res, next) => {
    res.render("newTodo", {path: "/add-todo", title: "Add ToDo"})
});

app.get("/all-todo", (req, res, next) => {
    res.render("allTodos", {path: "/all-todo", title: "All ToDo's"})
})

app.get("/", (req, res) => {
    res.render('home', {path: "/", title: "ToDo App"})
});

app.listen(3000);