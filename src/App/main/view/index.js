import './index.scss'

import { Route, Switch } from "react-router-dom";

import Home from 'App/home'
import Login from 'modules/login'
import Me from 'App/me'
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/me" component={Me} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
