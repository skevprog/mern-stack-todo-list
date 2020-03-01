import React, { Component } from 'react';
import './App.css';

import Button from './components/Button';
import Todos from './containers/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch('/api/v1/todos')
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data.data });
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
    fetch('/api/v1/todos', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(resp => resp.json())
      .then((respJest) => {
        this.setState({
          todo: '',
          todos: [...todos, respJest.data],
        });
      })
      .catch(err => console.error('Something went wrong!', err.message));
  }

  handleOnDelete = (id) => {
    const { todos } = this.state;
    fetch(`/api/v1/todos/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => this.setState({
        // eslint-disable-next-line no-underscore-dangle
        todos: [...todos.filter(el => el._id !== id)],
      }));
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todos App</h1>
        </header>
        <form
          onSubmit={this.handleOnSubmit}
          className="row flex-center"
        >
          <input
            type="text"
            name="todo"
            onChange={this.handleOnChange}
            value={todo}
            placeholder="Write a task"
          />
          <Button
            type="submit"
            text="Add"
            disabled={!todo}
            className="margin-left-small"
          />
        </form>
        <div className="todos-container child-borders">
          <Todos todos={todos} onDelete={this.handleOnDelete} />
        </div>
      </div>
    );
  }
}

export default App;
