import React, { Component, Fragment } from 'react';
import Todo from '../../components/Todo';

export default class Todos extends Component {
  renderTodos = () => {
    const { todos, onDelete } = this.props;
    return todos.map((todo) => {
      const { description, _id } = todo;
      return (
        <Todo key={_id} description={description} onDelete={() => onDelete(_id)} />);
    });
  }

  render() {
    const { todos } = this.props;
    return (
      <Fragment>
        {(todos.length) ? this.renderTodos() : null}
      </Fragment>
    );
  }
}
