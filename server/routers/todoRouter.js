const express = require('express');
const todoController = require('../constrollers/todoController');

const todoRouter = express.Router();

todoRouter.get('/todos', todoController.getTodoList );
todoRouter.post('/todo', todoController.addTodo );
todoRouter.delete('/todo/:id', todoController.deleteTodo );
todoRouter.put('/todo', todoController.updateTodo );

module.exports = todoRouter;