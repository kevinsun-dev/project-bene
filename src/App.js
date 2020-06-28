import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TimeSelect from './TimeSelect';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/getstarted">
            
          </Route>
          <Route path="/dosomething">
            
          </Route>
          <Route path="/">
            <TimeSelect />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;