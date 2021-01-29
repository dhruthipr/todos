const router = require('express').Router();
const {
    addTodo,
    getTodos,
    getTodosByStatus
} = require('./todo_service/todoService');

// Add todo
router.post('/add',addTodo);

// Get all todos
router.get('/get/all',getTodos);

// Get todos based on status
router.get('/get/:status',getTodosByStatus);

module.exports = router;