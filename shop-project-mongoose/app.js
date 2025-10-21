const express = require('express');

const app = express();

app.get('/',(req, res, next) => {
    res.send('Ovo je moj prvi kod ')
})

app.listen(3000);