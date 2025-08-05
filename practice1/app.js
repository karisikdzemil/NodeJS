const express = require("express");
const path = require("path");

const app = express();

const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");  

const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes.router);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);