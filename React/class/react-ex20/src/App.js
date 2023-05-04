import './App.css';
import {Route, Routes} from "react-router-dom";
import Intro from './pages/intro';
import Default from './pages/default';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div id="mainContainer">
      <Routes>
        <Route path={"/"} element={<Intro />}>
          <Route index element={<Default />}></Route>

          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
