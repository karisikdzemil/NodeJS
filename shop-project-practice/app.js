const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("Sve radi bebiii");
});
