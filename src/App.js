import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { List } from './components/List';

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    console.log('click');
    setCount(count + 1);
  };

  return (
    <div>
      <List
        list={[
          { name: 'list 1', isSelected: false },
          { name: 'list2', isSelected: true },
        ]}
      />
    </div>
  );
}

export default App;
