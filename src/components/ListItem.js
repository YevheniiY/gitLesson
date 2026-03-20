import { useState } from 'react';

export const ListItem = ({ name, isSelected, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={isSelected} />
      <span>{name}</span>
      <button onClick={() => onDelete()}>Delete</button>
    </li>
  );
};
