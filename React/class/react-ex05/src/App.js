import './App.css';
import {useState} from "react";

function App() {
  const [inputs, setInputs] = useState({name : "", nickname : ""});

  const {name, nickname} = inputs;

  const onChangeValue = (e) => {
    const {value, name} = e.target;

    setInputs({...inputs, [name] : value});
  }

  const onReset = (e) => {
    setInputs({name : "", nickname: ""});
  }

  return (
    <div>
      <input type="text" name='name' id='name' placeholder='Name' onChange={onChangeValue} value={name}></input>
      <input type="text" name='nickname' id='nickname' placeholder='Nickname' onChange={onChangeValue} value={nickname}></input>
      <button onClick={onReset}>Reset</button>

      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default App;