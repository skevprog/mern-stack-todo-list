import React from 'react';
import './App.css';
import { Component } from 'react';
import Button from './components/Button';
import Todos from './containers/Todos';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      todo: e.target.value
    });
    console.log(this.state)
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      todo: '',
    });
  }
  
  render() {
    const { todo } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todos App</h1>
        </header>
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text" 
              name="todo"
              onChange={this.handleOnChange}
              value={todo}
            />
            <Button 
              type="submit" 
              text="Add"
              disabled={!todo}
            />
          </form>
          <div className="todos-container">
            <Todos />
          </div>
      </div>
    );
  }
}

export default App;
