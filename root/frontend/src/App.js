import React, { Component } from 'react';
import './App.css';

import { Button } from './components';
import { API_URL } from './utilities';
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
    fetch(API_URL)
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
    fetch(API_URL, {
      method: 'POST',
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
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
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
            className="col-6 lg-2"
          />
          <Button
            type="submit"
            text="Add"
            disabled={!todo}
            className="margin-left-small col-2 lg-1"
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
