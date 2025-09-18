const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('kako si ')
})

app.listen(3000, () => {
    console.log("Sve radi bebiii")
});