import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import './App.css';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import ClipLoader from "react-spinners/ClipLoader";


const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <>
      {
        loading ?
          <div className="loader">
            <h1 className="loading-title">Loading</h1>
            <br />
            <ClipLoader
              color={"#4A90E2"}
              loading={loading}
              size={25} />
          </div>
          :
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/products" component={Products} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
            <Footer />
          </Router>
      }
    </>
  );
}

export default App;