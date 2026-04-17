import { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import './list.css';

export const List = ({ list, onDelete, handleIsDone }) => {
  return (
    <ul className="list">
      {list?.map((listItme, index) => {
        return (
          <ListItem
            id={listItme.id}
            name={listItme.name}
            isSelected={listItme.isSelected}
            onDelete={onDelete}
            handleIsDone={handleIsDone}
          />
        );
      })}
    </ul>
  );
};
