import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { List } from './components/List/List';
import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { Details } from './components/Details/Details';

function App() {
  const [list, setList] = useState([]);

  const onAddClick = (text) => {
    if (text?.length > 0) {
      setList([
        ...list,
        {
          id: Date.now(),
          name: text,
          isSelected: false,
        },
      ]);
    }
  };

  const handleOnDelete = (id) => {
    const newListItems = list.filter((listItem) => listItem.id !== id);
    setList(newListItems);
  };

  const handleIsDone = (id, isSelected) => {
    const updatedListItems = list.map((listItem) => {
      if (listItem.id !== id) {
        return listItem;
      }

      return {
        ...listItem,
        isSelected: isSelected,
      };
    });

    setList(updatedListItems);
  };

  const doneItems = list.filter((item) => item.isSelected);

  return (
    <div>
      <AddNewItem onAddClick={onAddClick} />
      <Details total={list?.length} done={doneItems.length} />
      <List list={list} onDelete={handleOnDelete} handleIsDone={handleIsDone} />
    </div>
  );
}

export default App;
