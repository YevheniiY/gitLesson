import { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import './list.css';

export const List = ({ list }) => {
  return (
    <ul className="list">
      {list?.map((listItme, index) => {
        return (
          <ListItem name={listItme.name} isSelected={listItme.isSelected} />
        );
      })}
    </ul>
  );
};
