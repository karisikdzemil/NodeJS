const express = require("express");
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

mongoConnect(() => {
  app.listen(3000);
});

