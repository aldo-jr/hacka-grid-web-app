import "./index.scss";

import { Redirect, Route, Switch } from "react-router-dom";

import Login from "modules/login";
import Me from "App/me";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/me" component={Me} />
            <Route component={() => <Redirect to='/login' />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
