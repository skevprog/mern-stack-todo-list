import React, { Component, Fragment } from 'react';
import { Todo } from '../../components';

export default class Todos extends Component {
  renderTodos = () => {
    const { todos, onDelete, animation } = this.props;
    return todos.map((todo) => {
      const { description, _id } = todo;
      return (
        <Todo
          key={_id}
          uniqueKey={_id}
          description={description}
          onDelete={() => onDelete(_id)}
          animation={animation}
        />
      );
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
