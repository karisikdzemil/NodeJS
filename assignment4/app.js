const express = require("express");
const path = require("path");

const app = express();

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(usersRoutes);

app.listen(3000);