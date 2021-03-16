import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const initialCount= 0;
  const [count, setCount] = useState(initialCount);
  const [color, setColor] = useState('black');

  function incrementCount() {
    setCount(count + 1);
  };

  function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(initialCount);
  }

  useEffect(() => {
    function changeColorOnClick() {
      if(color==='black') {
        setColor('red');
      } else {
        setColor('black');
      }
    };

    document.getElementById('myDiv').addEventListener('click', changeColorOnClick);

    return () => {
      document.getElementById('myDiv').removeEventListener('click', changeColorOnClick);
    }

  }, [color]);

  useEffect(() => {
    document.title= `Clicked ${count} times`;
  })

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
      }}>This div changes color. Click me!</div>
    </div>

  );
}

export default App;
