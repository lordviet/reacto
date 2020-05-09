import React from 'react';
import './App.css';
import Boards from '../Boards/Boards';
import BoardLists from '../BoardLists/BoardLists'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Boards} />
          <Route path='/board/:id' component={BoardLists} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
