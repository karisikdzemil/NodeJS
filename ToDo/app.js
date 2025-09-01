const express = require("express");
const app = express();

const sequelize = require('./util/database');

app.set("view engine", "ejs");
app.set("views, views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");

app.use(todoRoutes);

sequelize.sync().then(result => {
    app.listen(3000);
}).catch(err => {console.log(err)})

