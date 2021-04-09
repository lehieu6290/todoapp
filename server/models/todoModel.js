const db = require('../database');

const Todos = {};

Todos.getAll = function(){
    const sql = "SELECT * FROM todo ORDER BY id asc";
    return db.query(sql);
}

Todos.insertTodo = function(title){
    const sql = "INSERT INTO todo(title) VALUES($1)";
    return db.query(sql, [title]);
}

Todos.deleteTodo = function(id){
    const sql = "DELETE FROM todo WHERE id=$1";
    return db.query(sql, [id]); 
}

Todos.updateTodo = function(id, title, status){
    const sql = "UPDATE todo SET title=$1, status=$2 WHERE id=$3";
    return db.query(sql, [title, status, id]);
}

module.exports = Todos;