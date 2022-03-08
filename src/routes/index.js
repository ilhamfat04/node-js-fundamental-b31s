//instantiate express module here
const express = require('express')

// Init express router here..
const router = express.Router()

// Get controller here
const { getTodos } = require('../controllers/todo')

// Create Route here
router.get('/todos', getTodos)

// Export module router here
module.exports = router