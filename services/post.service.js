const db = require('../db');

module.exports.getAllPosts = async () => {
    const [rows] = await db.query('SELECT * FROM posts')
    return rows;
}

module.exports.getPostById = async(id) => {
    const [[rows]] = await db.query('SELECT * FROM posts WHERE id = ?',[id]);
    return rows;
}

module.exports.deletePost = async(id) => {
    const [{affectedRows}] = await db.query('DELETE FROM posts WHERE id = ?',[id]);
    return affectedRows;
}

module.exports.addOrEditPost = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query('CALL add_or_edit(?,?,?,?)',[id, obj.name_string, obj.message, obj.post_timestamp]);
    return affectedRows;
}