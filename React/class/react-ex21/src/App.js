import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import ParamCompo01 from './pages/paramCompo01';
import ParamCompo02 from './pages/ParamCompo02';
import Compo01 from './component/Compo01';
import Compo02 from './component/Compo02';
import Compo03 from './component/Compo03';

function App() {
  const navigate = useNavigate();

  const objMapper = [
    {page : (<Compo01 />)},
    {page : (<Compo02 />)},
    {page : (<Compo03 />)}
  ];

  const [flag, setFlag] = useState(0);



  return (
    <div id="mainContainer">
      <h3>Hello React!</h3>
      <button onClick={() => {navigate("/param-search?id=abc&name=%OH")}}>Move</button>
      <button onClick={() => {setFlag( i => i+1)}}>Event</button>
      <Routes>
        <Route path={"/param/:id"} element={<ParamCompo01 />}></Route>
        <Route path={"/param-search"} element={<ParamCompo02 />}></Route>
      </Routes>
      {objMapper[flag].page}
    </div>
  );
}

export default App;
