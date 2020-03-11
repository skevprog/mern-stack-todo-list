import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Button, Todo } from '../../components';
import { getTodos, createTodo, deleteTodo } from '../../redux/actions/todoActions';

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
      this.props.createTodo({ description });
  }

  handleOnDelete = (id) => {
    this.props.deleteTodo(id);
  }

  renderTodos = () => {
    const { todos } = this.props.all;
    return todos.map(({ _id, description }) =>
      (
        <Todo
          key={_id}
          uniqueKey={_id}
          description={description}
          onDelete={() => this.handleOnDelete(_id)}
        />
      )
    );
  }

  render() {
    const {
      description,
    } = this.state;
    console.log(this.props.all)
    return (
      <Fragment>
        <form
          onSubmit={this.handleOnSubmit}
          className="row flex-center margin-bottom-large"
        >
          <input
            type="text"
            name="description"
            onChange={this.handleOnChange}
            value={description}
            placeholder="Write a task"
            className="col-6 md-4"
          />
          <Button
            type="submit"
            text="Add"
            disabled={!description}
            className="margin-left-small col-2 md-1"
          />
        </form>
        <div className="todos-container child-borders">
          {this.renderTodos()}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  all: state.todo,
})

export default connect(mapStateToProps, { getTodos, createTodo, deleteTodo })(TodoList);
