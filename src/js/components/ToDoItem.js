import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ removeFromArray, title }) => {
  const removeItem = () => removeFromArray(title);

  return (
    <div className="ToDoItem">
      <div className="ToDoItem-title">{title}</div>
      <div
        className="ToDoItem-remove"
        onClick={removeItem}
        role="button"
        tabIndex={0}
      >
        Remove
      </div>
    </div>
  );
};

ToDoItem.propTypes = {
  removeFromArray: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ToDoItem;
