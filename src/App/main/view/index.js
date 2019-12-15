import { Route, Switch } from "react-router-dom";

import Home from 'App/home'
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
