import './App.css';
import DivComp from "./Component/DivComp.js"

function App() {
  const blueClass = "hb"
  let text01 = "abcdefg";
  const text02 = {__html: `<p>abcdefg</p>`};

  // useState(() => {
  //   document.querySelector("p1").innerText = text;
  // });

  function event01() { alert("Event1"); }

  function tag1() { return <h1>This is Tag with function</h1>}
  
  return (
    <div class="mainContainer">
      <h1>Hello React!</h1>
      <h1 className="ha">Red Text</h1>
      <h1 className={blueClass}>Blue Text</h1>

      <label htmlFor="abc"></label>
      <p id="p1">{text01}</p>
      <p dangerouslySetInnerHTML={text02}></p>

      <button onClick={event01}>Click!</button>
      {tag1}
      <DivComp></DivComp>
    </div>
  );
}

export default App;