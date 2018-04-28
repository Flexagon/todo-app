import React from 'react';
import PropTypes from 'prop-types';

const AddItem = ({ onInputChange, pushToArray, inputValue }) => {
  const inputChange = e => onInputChange(e.target.value);
  const onAddItem = () => pushToArray(inputValue);

  return (
    <div className="AddItem">
      <input
        className="AddItem-input"
        type="text"
        value={inputValue}
        onChange={inputChange}
      />
      <button className="AddItem-button" onClick={onAddItem}>Add ToDo</button>
    </div>
  );
};

AddItem.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  pushToArray: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default AddItem;
