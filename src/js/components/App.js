import React, { Component } from 'react';
import DATA from '../data';
import AddItem from './AddItem';
import ToDoList from './ToDoList';

export default class App extends Component {
  state = {
    toDoArray: DATA,
    inputValue: '',
  };

  onInputChange = value => this.setState({ inputValue: value });

  pushToArray = (title) => {
    const { toDoArray } = this.state;

    if (title !== '') toDoArray.push({ title });
    this.setState({ toDoArray, inputValue: '' });
  }

  removeFromArray = (title) => {
    const { toDoArray } = this.state;

    this.setState({ toDoArray: toDoArray.filter(item => item.title !== title) });
  }

  render() {
    const { toDoArray, inputValue } = this.state;

    return (
      <div className="App">
        <AddItem
          pushToArray={this.pushToArray}
          onInputChange={this.onInputChange}
          inputValue={inputValue}
        />
        <ToDoList
          toDoArray={toDoArray}
          removeFromArray={this.removeFromArray}
        />
      </div>
    );
  }
}
