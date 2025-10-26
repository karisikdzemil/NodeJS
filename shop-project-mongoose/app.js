const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const path = require("path");
const shopRoutes = require("./routes/shop/shop");
const adminRoutes = require("./routes/admin/admin");

const MONGODB_URI =
  "mongodb+srv://karisikdzemil:Dzemil123@cluster0.ldrhrp1.mongodb.net/shop-mongoose?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const user = User.findOne({_id: "68fe2a4f793cd7a313fd3a15"}).then(user => {
    req.user = user;
    next();
  });
})
app.use(shopRoutes);
app.use(adminRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.findOne({ _id: "68fe2a4f793cd7a313fd3a15" })
      .then((user) => {
        if (user) {
          return;
        } else {
          const user = new User({
            email: "karisidzemil@gmail.com",
            password: "Dzemil123@",
            cart: { items: [] },
          });
          user.save();
        }
      })
      .catch((err) => console.log(err));
    app.listen(3000);
  })
  .catch((err) => console.log(err));
