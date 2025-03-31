const mysql = require ('mysql2/promise');
require ('dotenv').config()

const mysqlPool = mysql.createPool({ //connects to the database
    host: 'anondb.mysql.database.azure.com',
    user: 'webmster',
    password: '!mynamejeff444',
    database: 'posts_db'

});

mysqlPool.query("SELECT 1")
    .then(() => console.log('Successful Database Connection'))
    .catch(err => console.log('Database Connection Failed. \n' + err));

module.exports = mysqlPool;
