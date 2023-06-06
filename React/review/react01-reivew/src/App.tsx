import React from 'react';
import './App.css';
import Button from "./component/Button";

function App() {
    const Alert = () => { alert("Hi!"); }

      return (
          <div className="mainContainer">
              <h1>Hello React</h1>
              <Button width={100} height={30} onClick={Alert}>
                  <div>this is Button</div>
              </Button>
          </div>
      );
}

export default App;
