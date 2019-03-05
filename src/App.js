import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul> 
              <li><NavLink exact to="/" className="App-link">Accueil</NavLink></li> 
              <li><NavLink to="/Apropos" className="App-link">A propos</NavLink></li> 
              <li><NavLink to="/Contact" className="App-link">Contact</NavLink></li> 
            </ul> 
          </header>

          <div className="content">
            <Route exact path="/" component={Accueil}/>
            <Route path="/Apropos" component={Apropos}/>
            <Route path="/Contact" component={Contact}/>
          </div>

          <footer className="App-footer">
            <p>Copyright &copy; Miranto, Lee 2019</p>
          </footer>
        </div>        
      </Router>
    );
  }
}

export default App;
