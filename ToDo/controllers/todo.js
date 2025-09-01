const ToDo = require('../models/todo');

exports.getHome = (req, res) => {
  res.render("home", { path: "/", title: "ToDo App" });
};

exports.getAddTodo = (req, res, next) => {
  res.render("newTodo", { path: "/add-todo", title: "Add ToDo" });
};

exports.allTodo = (req, res, next) => {
  ToDo.findAll().then(result => {
    console.log(result);
  }).catch(err => console.log(err))


  // ToDo.readTodos()
  //   .then((result) => {
  //     console.log(result);
  //     res.render("allTodos", {
  //       path: "/all-todo",
  //       title: "All ToDo's",
  //       todos: result[0],
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // ToDo.readTodos((todos) => {
  //     res.render("allTodos", {path: "/all-todo", title: "All ToDo's", todos: todos});
  // });
};

exports.postTodo = (req, res) => {
  const id = Math.random().toString();
  const title = req.body.title;
  const desc = req.body.description;
  const todo = new ToDo(id, title, desc);
  todo
    .save()
    .then(() => {
      res.redirect("/all-todo");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTodo = (req, res, next) => {
  const id = req.params.id.replace(":", "");
  ToDo.readTodos((todos) => {
    const targetTodo = todos.find((el) => el.id === id);
    console.log(targetTodo);
    if (targetTodo) {
      res.render("todo", {
        path: "/all-todo",
        title: "ToDo Details",
        todo: targetTodo,
      });
    } else {
      res.redirect("/");
    }
  });
};
