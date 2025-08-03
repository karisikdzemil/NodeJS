const express = require("express");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

app.use(usersRoutes);
app.use(homeRoutes);

app.listen(3000);