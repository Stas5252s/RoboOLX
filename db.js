const mysql = require('mysql2');
require('dotenv').config();

let host = process.env.DB_HOST
let port = process.env.DB_PORT
let user = process.env.DB_USERNAME
let password = process.env.DB_PASSWORD
let dbname = process.env.DB_DATABASE

const connection = mysql.createConnection({
    host,
    port,
    user,
    password,
    database: dbname
});

connection.connect(async (err) => {
    if (err) {
        console.error('Error' + err.stack);
        return;
    }
});

module.exports = connection;