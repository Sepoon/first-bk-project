const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'a123123',
    database: 'shopdb'
});
 
module.exports = db;