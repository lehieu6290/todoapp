const todoModel = require('../models/todoModel');

module.exports = {
    getTodoList: function(req, res){
        todoModel.getAll()
            .then(data => {
                res.status(200).json({ success: true, todos: data.rows });
            })
            .catch(() => {
                res.status(400).json({ success: false });
            })
    },

    addTodo: function(req, res){
        let { title } = req.body;
        todoModel.insertTodo(title)
            .then(() => {
                res.status(200).json({ success: true });
            })
            .catch(() => {
                res.status(400).json({ success: false });
            })
    },

    deleteTodo: function(req, res){
        let id = req.params.id;
        todoModel.deleteTodo(id)
            .then(() => {
                res.status(200).json({ success: true });
            })
            .catch(() => {
                res.status(400).json({ success: false });
            })
    },

    updateTodo: function(req, res){
        let { id, title, status } = req.body;
        todoModel.updateTodo(id, title, status)
            .then(() => {
                res.status(200).json({ success: true });
            })
            .catch(() => {
                res.status(400).json({ success: false });
            })
    }
}