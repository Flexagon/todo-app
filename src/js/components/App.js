import React, { Component } from 'react';
import AddItem from './AddItem';
import ToDoList from './ToDoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    const toDoArray = [
      { title: 'First Todo' },
    ];

    this.state = { toDoArray };
  }

  pushToArray = (title) => {
    const { toDoArray } = this.state;

    if (title !== '') toDoArray.push({ title });
    this.setState({ toDoArray });
  }

  removeFromArray = (title) => {
    const { toDoArray } = this.state;

    this.setState({ toDoArray: toDoArray.filter(item => item.title !== title) });
  }

  render() {
    return (
      <div className="App">
        <AddItem pushToArray={this.pushToArray} />
        <ToDoList toDoArray={this.state.toDoArray} removeFromArray={this.removeFromArray} />
      </div>
    );
  }
}
