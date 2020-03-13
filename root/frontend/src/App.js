import React, { Component } from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Header } from './components';
import TodoList from './containers/TodoList/TodoList';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="To-do List" />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
