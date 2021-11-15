import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import CustomNavbar from './Pages/Home/CustomNavbar/CustomNavbar';
import Footer from './Pages/Common/Footer/Footer';
import Explore from './Pages/Explore/Explore';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/Login/Login/LogIn';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar></CustomNavbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
