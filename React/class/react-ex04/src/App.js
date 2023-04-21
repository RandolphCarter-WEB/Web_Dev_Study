import './App.css';
import {useState} from "react";

function App() {
  const [objs, setObj] = useState([{name : "items", price: "5000"}, {name : "items", price : "5250"}]);
  
  function printObj(obj) {
    return (
      <div>
        {Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <h1>Index[{key}]</h1>
            <h3>name : {value.name}</h3>
            <h3>price : {value.price}</h3>
            <button onClick={() => {removeObj(key)}}>Remove</button>
            <button onClick={() => {replaceObj(key)}}>Replace</button>
          </div>
        ))}
      </div>
    );
  }

  function replaceObj(key) {
    const newObj = [ ...objs ];
    newObj[key].name = "ReplaceItem"+(Number.parseInt(key)+1);
    setObj(newObj);
  }

  function removeObj(key) {
    const newObj = objs.filter((element) => !(element === objs[key]));
    setObj(newObj);
  }
  
  function updateObj() {
    let newObj = {};
    newObj.name = `item${objs.length+1}`;
    newObj.price = `${Math.floor(Math.random() * 1001)+5000}`;

    setObj([...objs, newObj]);
  }

  function deleteObj() {
    objs.pop();
    setObj([...objs]);
  }
  
  return (
    <div>
      {printObj(objs)}
      <button onClick={() => updateObj()}>Update</button>
      <button onClick={() => deleteObj()}>Delete</button>
    </div>
  );
}

export default App;