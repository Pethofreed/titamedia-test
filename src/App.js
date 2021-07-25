import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import { history } from './utils/history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
