const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ToDo",
    password: "ljuljaska!2"
});

module.exports = pool.promise();