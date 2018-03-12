import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import { requireAuth } from './utils/AuthService';

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={FoodJokes} exact={true} />
        <Route
          path="/special"
          component={CelebrityJokes}
          onEnter={requireAuth}
        />
        <Route path="/callback" component={Callback} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
