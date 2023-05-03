import { useState } from 'react';
import './App.css';
import Compo01 from './component/Compo01';
import Compo02 from './component/Compo02';
import Compo03 from './component/Compo03';

function App() {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <Compo01></Compo01>
      <hr></hr>
      <Compo02></Compo02>
      <Compo03 cnt={cnt}></Compo03>
    </div>
  );
}

export default App;
