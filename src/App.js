import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TimeSelect from './components/TimeSelect';
import GetStarted from './components/GetStarted';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/getstarted">
            <GetStarted />
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