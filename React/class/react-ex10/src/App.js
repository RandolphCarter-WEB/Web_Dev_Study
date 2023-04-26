import './App.css';

import Compo01 from './component/Compo01';
import Compo02 from './component/Compo02';

function App() {
  return (
    <div id="mainContainer">
      <h3>Hello React!!</h3>
      <Compo01 text01="React"></Compo01>
      <Compo02>
        <h1>Hello</h1>
        <h1>This is AppTag.</h1>
      </Compo02>
    </div>
  );
}

export default App;