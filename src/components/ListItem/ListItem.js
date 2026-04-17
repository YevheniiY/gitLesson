import { useState } from 'react';
import './listItem.css';

export const ListItem = ({ id, name, isSelected, onDelete, handleIsDone }) => {
  return (
    <li className="listItem">
      <div>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            handleIsDone(id, !isSelected);
          }}
        />
        <span>{name}</span>
      </div>

      <button
        onClick={() => {
          console.log('id===', id);
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
