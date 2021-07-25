import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './pages/Landing'
import { history } from './utils/history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
