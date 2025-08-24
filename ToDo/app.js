const express = require('express');

const app = express();


app.set("view engine", "ejs");
app.set("views, views");

app.use(express.static("public"));

app.get("/add-todo", (req, res, next) => {
    res.render("newTodo", {path: "/add-todo"})
});

app.get("/all-todo", (req, res, next) => {
    res.render("allTodos", {path: "/all-todo"})
})

app.get("/", (req, res) => {
    res.render('home', {path: "/"})
});

app.listen(3000);