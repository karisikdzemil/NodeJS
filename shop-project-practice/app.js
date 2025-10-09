const express = require("express");
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const testUser = new User('Djemsi', 'djemsi@gmail.com');
  req.user = testUser;
  next();
});

mongoConnect(() => {
  app.listen(3000);
});

