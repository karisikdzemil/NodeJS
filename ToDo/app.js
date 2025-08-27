const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views, views");

const db = require("./util/database");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");

db.execute("SELECT * FROM ToDo.todo")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(todoRoutes);

app.listen(3000);
