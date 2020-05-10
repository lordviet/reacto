import React from 'react';
import './App.css';
import Boards from '../Boards/Boards';
import BoardLists from '../BoardLists/BoardLists';
import NotFound from '../NotFound/NotFound';
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
          <Route exact path='/' component={Boards} />
          <Route path='/board/:id' component={BoardLists} />
          <Route path='/*' component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
