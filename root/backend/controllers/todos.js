// @desc Get all Todos
// @route GET /api/v1/todos
// @access Public
exports.getTodos = (req, res, next) => {
  res.send('GET todos');
};

// @desc Add Todo
// @route POST /api/v1/todos
// @access Public
exports.addTodo = (req, res, next) => {
  res.send('POST todo');
};

// @desc Delete Todo
// @route DELETE /api/v1/todos
// @access Public
exports.deleteTodo = (req, res, next) => {
  res.send('DELETE Todo');
};
