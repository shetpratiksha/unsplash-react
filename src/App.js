import React, { Component } from 'react';
import './App.css';
import Home  from './Component/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
      </Router>
    );
  }
 
}

export default App;
