import React, { Component } from 'react';
import './App.css';
import Home  from './Component/Home';
import ErrorC  from './Component/Error';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route component={ErrorC} />
        </Switch>
      </div>
      </Router>
    );
  }
 
}

export default App;
