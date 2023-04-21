import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(cnt => cnt + 1);
  }

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increaseCount}>Click!</button>
    </div>
  );
}

export default App;