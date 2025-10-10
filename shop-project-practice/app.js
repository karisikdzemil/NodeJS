const express = require("express");
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');
const getDb = require('./util/database').getDb;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const testUser = new User('djemsi@gmail.com', 'Djemsi');
app.use((req, res, next) => {
  const db = getDb();
  db.collection('users').findOne({email: testUser.email}).then(user => {
      if(user){
        req.user = testUser;
        return next();
      }
      testUser.save();
      req.user = testUser;
      return next();
  })
});

app.use(adminRoutes);
app.use(shopRoutes);

mongoConnect(() => {
  app.listen(3000);
});

