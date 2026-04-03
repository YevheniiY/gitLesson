import { useState } from 'react';
import './listItem.css';

export const ListItem = ({ name, isSelected, onDelete }) => {
  return (
    <li className="listItem">
      <div>
        <input type="checkbox" checked={isSelected} />
        <span>{name}</span>
      </div>

      <button onClick={() => onDelete()}>Delete</button>
    </li>
  );
};
