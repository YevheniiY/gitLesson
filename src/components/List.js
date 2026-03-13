import { useState } from 'react';

export const List = ({ list }) => {
  return (
    <ul>
      {list?.map((listItme, index) => {
        return <li key={index}>Item: {listItme.name}</li>;
      })}
    </ul>
  );
};
