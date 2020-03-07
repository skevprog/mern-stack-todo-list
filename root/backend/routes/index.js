const express = require('express');

const router = express.Router();
const { getTodos, addTodo, deleteTodo, deleteTodos } = require('../controllers/todos');

router
  .route('/')
  .get(getTodos)
  .post(addTodo)
  .delete(deleteTodos);

router.route('/:id').delete(deleteTodo);

module.exports = router;
