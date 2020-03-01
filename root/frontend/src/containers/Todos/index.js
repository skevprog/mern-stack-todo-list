import React, { Component } from 'react'

export default class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['Clean Bedroom', 'Buy water', 'Go to the Supermarket'],
    };
  }

  renderTodos = () => this.state.todos.map((todo, key) => (<h3 key={key}>{todo}</h3>))

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}
