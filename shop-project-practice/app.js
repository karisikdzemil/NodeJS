const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Home')
});

app.get('/products', (req, res) => {
    res.send('Products page');
});

app.get('/create-product', (req, res) => {
    res.send('Create product page')
});

app.listen(3000, () => {
    console.log("Sve radi bebiii")
});