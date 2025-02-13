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


/*
mysqlPool.query("SELECT * FROM POSTS")
    .then(data => console.log(data))
    .catch(err => console.log('Database Connection Failed. \n' + err))thui
*/


module.exports = mysqlPool


/*
INSERT INTO posts (name_string, message, post_timestamp)
VALUES ('Jeff','First post!', current_timestamp());
*/