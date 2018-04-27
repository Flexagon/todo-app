import React from 'react';

const ToDoItem = (props) => {
  const { removeFromArray, title } = props;

  const removeItem = () => removeFromArray(title);

  return (
    <div className="ToDoItem">
      <div className="ToDoItem-title">{title}</div>
      <div className="ToDoItem-remove" onClick={removeItem}>Remove</div>
    </div>
  );
};

export default ToDoItem;
