import { useState } from 'react';
import { ListItem } from './ListItem';

export const List = ({ list }) => {
  return (
    <ul>
      {list?.map((listItme, index) => {
        return (
          <ListItem name={listItme.name} isSelected={listItme.isSelected} />
        );
      })}
    </ul>
  );
};
