import { useState } from 'react';
import './addNewItem.css';

export const AddNewItem = ({ onAddClick }) => {
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <input
        className="textField"
        type="text"
        value={text}
        onChange={onInputChange}
      />
      <button className="addButton" onClick={() => onAddClick(text)}>
        Add
      </button>
    </div>
  );
};
