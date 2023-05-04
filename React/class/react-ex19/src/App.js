import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from './pages/HOME';
import About from './pages/ABOUT';
import Intro from './pages/INTRO';

const activeStyle = {
  color : "green",
  fontSize : "2rem"
};

function App() {

  return (
    <div id="mainContainer">
      <h1>Hello ReactWorld</h1>
      <header>
        {/* <ul>
          <li><Link to={"/"}>Intro</Link></li>
          <li><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul> */}
        <ul>
          <li><NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : undefined }>Intro</NavLink></li>
          <li><NavLink to={"/home"} style={({isActive}) => isActive ? activeStyle : undefined }>Home</NavLink></li>
          <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : undefined }>About</NavLink></li>
        </ul>
      </header>
      <Routes>
        <Route path={"/"} element={<Intro />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"*"} element={<Intro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
