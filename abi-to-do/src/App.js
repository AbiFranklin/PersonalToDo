import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import ListItems from './ListItems'

class App extends Component {
  state = {
    todo: ['Walk Dog', 'Go Shopping', 'Homework']
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Abi's To Do List</h1>
        </header>
        <div>
          <AddItem />
          <ListItems todo={this.state.todo}/>
        </div>
      </div>
    );
  }
}

export default App;
