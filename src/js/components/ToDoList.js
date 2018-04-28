import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoArray, removeFromArray }) => (
  <div className="ToDoList">
    { toDoArray.map((toDoItem, index) => (
      <ToDoItem
        title={toDoItem.title}
        key={index}
        removeFromArray={removeFromArray}
      />
    ))}
  </div>
);

ToDoList.propTypes = {
  removeFromArray: PropTypes.func.isRequired,
  toDoArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ToDoList;
