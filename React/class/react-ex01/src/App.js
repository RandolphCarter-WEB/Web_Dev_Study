import './App.css';
import { Fragment } from "react";
import './default.css';

function App() {
  let a = 3;

  return (
    <div>
      <h1>Hello React!!</h1>
      <p>This is React!</p>
      <p>This is num : {a}</p>
    </div>

    // <Fragment>
    //   <h1>Hello React!</h1>
    // </Fragment>

    // <>
    //   <h1>Hello React!!</h1>
    //   <p>This is React!</p>
    // </>
  );
}

export default App;