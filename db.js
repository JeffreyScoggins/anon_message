const mysql = require ('mysql2/promise');
require ('dotenv').config()

const mysqlPool = mysql.createPool({ //connects to the database
    host: $db_host,
    user: $db_user,
    password: $db_password,
    database: $db_name

});

mysqlPool.query("SELECT 1")
    .then(() => console.log('Successful Database Connection'))
    .catch(err => console.log('Database Connection Failed. \n' + err));

module.exports = mysqlPool;
