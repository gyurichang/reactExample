import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);  

  
  return (
    <div>  
      {numbers.map((number) => (
        <div key={number}>{number * number}</div>
      ))}
    </div>
  );
}
export default App;
