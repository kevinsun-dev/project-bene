import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TimeSelect from './components/TimeSelect';
import GetStarted from './components/GetStarted';
import DoSomething from './components/DoSomething';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';


initializeIcons();

function App() {
  const [matches, setMatches] = useState(0);
  useEffect(() => {
    fetch('/dosomething').then(res => res.json()).then(data => {
      console.log(data)
      setMatches(data);
    });
  }, []);

  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/getstarted">
            <GetStarted />
          </Route>
          <Route path="/dosomething">
            <p>The current info is {JSON.stringify(matches)}.</p>
            <DoSomething />
          </Route>
          <Route path="/">
            <TimeSelect />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;