import React, { Component } from 'react';
import './App.css';

class ListItems extends Component {
  render() {
    return (
      <div className="listitems">
        <h1>List Items Component</h1>
        {this.props.todo}.forEach(item => {
            <h2>{item}</h2>
        })
      </div>
    );
  }
}

export default ListItems;