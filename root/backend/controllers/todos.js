const Todo = require('../models/Todos');

// @desc Get all Todos
// @route GET /api/v1/todos
// @access Public
exports.getTodos = async (req, res, next) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todo.length,
      data: todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc Add Todo
// @route POST /api/v1/todos
// @access Public
exports.addTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    return res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc Delete Todo
// @route DELETE /api/v1/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Not To-do Found',
      });
    }
    await todo.remove();

    return res.status(200).json({
      success: true,
      message: 'Todo removed',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc Delete Todos
// @route DELETE /api/v1/todos
// @access Public
exports.deleteTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    if (!todos.length) {
      return res.status(404).json({
        success: false,
        message: 'Not todos to remove',
      });
    }
    await todos.remove({});
    return res.status(200).json({
      success: true,
      message: 'Todos removed',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};
