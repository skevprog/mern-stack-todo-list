import React, { Component } from 'react';
import './App.css';

import { Button } from './components';
import { createTodo, deleteTodo, getTodos } from './utilities';
import Todos from './containers/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
      errorMessage: '',
      status: false,
    };
  }

  componentDidMount() {
    this.setTodos();
  }

  setTodos = () => {
    getTodos()
      .then((data) => {
        this.setState({ todos: data.data });
      })
      .catch(err => {
        this.setState({
          errorMessage: err.message
        })
      });
  }

  handleOnChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { todo, todos } = this.state;
    const data = { description: todo };
    createTodo(data)
      .then(data => {
        this.setState({
          todo: '',
          todos: [...todos, data.data],
        })
      })
      .catch(err => {
        this.setState({
          errorMessage: err.message
        })
      });
  }

  handleOnDelete = (id) => {
    const { todos } = this.state;
    deleteTodo(id)
      .then((data) => {
        if (data.success) {
          this.setState({
            // eslint-disable-next-line no-underscore-dangle
            todos: [...todos.filter(el => el._id !== id)],
            status: data.success,
          })
        }
      })
      .catch(err => {
        this.setState({
          errorMessage: err.message
        })
      });
  }

  render() {
    const { todo, todos, errorMessage } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-do List</h1>
        </header>
        <form
          onSubmit={this.handleOnSubmit}
          className="row flex-center margin-bottom-large"
        >
          <input
            type="text"
            name="todo"
            onChange={this.handleOnChange}
            value={todo}
            placeholder="Write a task"
            className="col-6 md-4"
          />
          <Button
            type="submit"
            text="Add"
            disabled={!todo}
            className="margin-left-small col-2 md-1"
          />
        </form>
        {todos.length ? (<div className="todos-container child-borders">
          <Todos todos={todos} status={this.state.status} onDelete={this.handleOnDelete} />
        </div>) : null}
        {errorMessage && <h3 className="error-message"></h3>}
      </div>
    );
  }
}

export default App;
