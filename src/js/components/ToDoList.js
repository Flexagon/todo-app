import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  const { toDoArray, removeFromArray } = props;

  return (
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
};

export default ToDoList;
