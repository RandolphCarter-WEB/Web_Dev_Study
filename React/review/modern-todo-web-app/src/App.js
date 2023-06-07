import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectTodo } from "./features/todoSlice";
import Login from "./components/Login";
import Details from "./pages/Details";
import EditTask from "./pages/EditTask";
import PageNotFound from "./pages/404Page";
import ListTasks from "./pages/ListTasks";

function App() {
  const user = useSelector(selectUser);
  const todos = useSelector(selectTodo);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="wrapper">
          <div className="box">
            <Switch>
              <Route exact path="/">
                {!user ? <Login /> : <Home />}
              </Route>

              {user && todos ? (
                <Route path="/details/:id">
                  <Details />
                </Route>
              ) : (
                <Redirect to="/"></Redirect>
              )}

              {user && todos ? (
                <Route path="/edit-task/:id">
                  <EditTask />
                </Route>
              ) : (
                <Redirect to="/"></Redirect>
              )}

              <Route path="/list-tasks">
                <ListTasks />
              </Route>

              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
