const mysql = require ('mysql2/promise');
require ('dotenv').config()

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.db_name

});

mysqlPool.query("SELECT 1")
    .then(() => console.log('Successful Database Connection'))
    .catch(err => console.log('Database Connection Failed. \n' + err));

module.exports = mysqlPool;