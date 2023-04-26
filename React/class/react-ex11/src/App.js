import './App.css';
import Compo01 from './component/Compo01';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Compo01></Compo01>
      <Compo01></Compo01>
      <h1 className='cls1'>Outer</h1>
    </div>
  );
}

export default App;
