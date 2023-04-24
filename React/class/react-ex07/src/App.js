import './App.css';
import Compo01 from './component/compo01.js'
import Compo02 from './component/compo02.js'
import Compo03 from './component/compo03.js'

function App() {
  return (
    <div className="App">
      <Compo01 val1="React" val2="World" val3="응애"></Compo01>
      <Compo02 val1="React" color="blue"></Compo02>
      <Compo03 color="red" text="Hello React World"></Compo03>
    </div>
  );
}

export default App;