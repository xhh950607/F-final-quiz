import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../pages/Home';
import CreateTrainee from '../pages/CreateTrainee';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-trainee" component={CreateTrainee} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
