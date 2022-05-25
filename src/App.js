import { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState([]);
  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((prevState) => [...prevState, val]);
    setVal('');
  };

  const handleDeleteClick = (item) => {
    setState((prevState) => prevState.filter((i) => i !== item));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={val} onChange={(e) => setVal(e.target.value)} type="text" />
        <button>Add</button>
      </form>
      <ul>
        {state.map((item, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <li>{item}</li>
            <button onClick={() => handleDeleteClick(item)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
