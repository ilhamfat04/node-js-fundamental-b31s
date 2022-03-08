//instantiate express module here
const express = require('express')

// Init express router here..
const router = express.Router()

// Get controller here
const {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todo')

// Create Route here
router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.post('/todo', addTodo)
router.patch('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

// Export module router here
module.exports = router