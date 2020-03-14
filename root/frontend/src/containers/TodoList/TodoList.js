import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Todo, TodoForm, Spinner } from '../../components';
import {
  getTodos,
  createTodo,
  deleteTodo,
} from '../../redux/actions/todoActions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleOnChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { description } = this.state;
    this.setState(
      {
        description: '',
      },
      () => this.props.createTodo({ description }),
    );
  };

  handleOnDelete = (id) => {
    this.props.deleteTodo(id);
  };

  renderTodos = () => {
    const { todos } = this.props.all;
    return todos.map(({ _id, description }) => (
      <Todo
        key={_id}
        uniqueKey={_id}
        description={description}
        onDelete={() => this.handleOnDelete(_id)}
      />
    ));
  };

  render() {
    const { description } = this.state;
    const { errorMessage, loading } = this.props;
    return (
      <Fragment>
        <TodoForm
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          inputValue={description}
          inputPlaceholder="Write a task"
        />
       {loading ? 
       (<Spinner />) 
        :
        (<div className="todos-container child-borders">
          {this.renderTodos()}
        </div>)}
        {errorMessage && <h4>{errorMessage}</h4>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  all: state.todo,
  errorMessage: state.todo.error,
  loading: state.todo.loading,
});

export default connect(mapStateToProps, { getTodos, createTodo, deleteTodo })(
  TodoList,
);
