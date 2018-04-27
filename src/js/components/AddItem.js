import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' };
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  onAddItem = (e) => {
    const { pushToArray } = this.props;

    this.setState({ inputValue: '' });
    pushToArray(this.state.inputValue);
  };

  render() {
    return (
      <div className="AddItem">
        <input
          className="AddItem-input"
          type="text"
          value={this.state.inputValue}
          onChange={this.inputChange}
        />
        <button className="AddItem-button" onClick={this.onAddItem}>Add ToDo</button>
      </div>
    );
  }
}
