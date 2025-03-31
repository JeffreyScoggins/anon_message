const mysql = require ('mysql2/promise');
require ('dotenv').config()

const mysqlPool = mysql.createPool({ //connects to the database
    host: Environment.GetEnvironmentVariable("db_host"),
    port: Environment.GetEnvironmentVariable("db_port"),
    user: Environment.GetEnvironmentVariable("user"),
    password: Environment.GetEnvironmentVariable("password"), // username and password for the database are stored in the .env file
    database: Environment.GetEnvironmentVariable("db_name")

});

mysqlPool.query("SELECT 1")
    .then(() => console.log('Successful Database Connection'))
    .catch(err => console.log('Database Connection Failed. \n' + err));

module.exports = mysqlPool;
