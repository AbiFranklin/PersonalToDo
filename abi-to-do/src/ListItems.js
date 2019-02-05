import React, { Component } from 'react';
import './App.css';

class ListItems extends Component {
  render() {
    return (
      <div className="listitems">
        {this.props.todo.map(item => {
        return (
          <div><input type="checkbox" /><h2>{item}</h2></div>
        )})}
      </div>
    )
  }
}

export default ListItems;