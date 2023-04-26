import Comp01 from "./component/Comp01.js"
import Comp02 from "./component/Comp02.js";

import { useState } from 'react';
import './App.css';

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState([
    {id:0, text:"text01"},
    {id:1, text:"text02"},
    {id:2, text:"text03"},
    {id:3, text:"text04"}]);

  return (
    <div>
      <h1>Hello React!</h1>
      <Comp01 val={val1} setfunc={setVal1}></Comp01>
      <Comp02 val={val2} setfunc={setVal2}></Comp02>
    </div>
  );
}

export default App;