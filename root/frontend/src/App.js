import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './containers/TodoList/TodoList';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>To-do List</h1>
          </header>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
