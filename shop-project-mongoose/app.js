const express = require("express");
const mongoose = require("mongoose");

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

app.use(shopRoutes);
app.use(adminRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
