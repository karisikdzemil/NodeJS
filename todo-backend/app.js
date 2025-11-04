const express = require('express');
const todoRoutes = require('./routes/todo');
const mongoose = require('mongoose');

const db_key = "mongodb+srv://karisikdzemil:Dzemil123@cluster0.ldrhrp1.mongodb.net/todo-rest-project?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());

app.use('api/todo/', todoRoutes);

app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.status || 500;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

mongoose.connect(db_key).then(result => {
    app.listen(8080);
}).catch(err => console.log(err))
