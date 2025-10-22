const express = require('express');
const path = require('path');
const shopRoutes = require('./routes/shop/shop');
const adminRoutes = require('./routes/admin/admin')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(adminRoutes);
app.listen(3000);