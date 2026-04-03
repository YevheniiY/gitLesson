import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { List } from './components/List/List';
import { AddNewItem } from './components/AddNewItem/AddNewItem';

function App() {
  const [list, setList] = useState([]);

  const onAddClick = (text) => {
    console.log('click', text);
    if (text?.length > 0) {
      setList([
        ...list,
        {
          id: new Date(),
          name: text,
          isSelected: false,
        },
      ]);
    }
  };

  return (
    <div>
      <AddNewItem onAddClick={onAddClick} />
      <List list={list} />
    </div>
  );
}

export default App;
