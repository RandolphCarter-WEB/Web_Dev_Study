import './App.css';
import Outter from './component/Outter';
import {createContext, useState} from "react";

export let UserContext = createContext();

function App() {
  const [num, setNum] = useState(0);

  return (
    <UserContext.Provider value={{num, setNum}}>
      <div id="mainContainer">
        <h1>Hello React</h1>
        <p>Current Num : {num}</p>
        <Outter></Outter>
      </div>
    </UserContext.Provider>
  );
}

export default App;