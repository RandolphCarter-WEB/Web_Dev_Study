import './App.css';
import Compo01 from './component/Compo01';
import Compo02 from './component/Compo02';
import Compo03 from './component/Compo03';
import Compo04 from './component/Compo04';

function App() {
  return (
    <div id="mainContainer">
      <h1>Hello React!!</h1>
      <Compo01></Compo01>
      <Compo02></Compo02>
      <Compo03></Compo03>
      <Compo04></Compo04>
    </div>
  );
}

export default App;