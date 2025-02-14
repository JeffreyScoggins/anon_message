const mysql = require ('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '!mynameJeff444',
    database: 'posts_db'

});

mysqlPool.query("SELECT 1")
    .then(() => console.log('Successful Database Connection'))
    .catch(err => console.log('Database Connection Failed. \n' + err));

module.exports = mysqlPool;