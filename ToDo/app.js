const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set("views, views");

app.use(express.static("public"));

const todoRoutes = require("./routes/todoRoutes");

app.use(todoRoutes);

app.listen(3000);