import { Route, Switch } from "react-router-dom";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <Switch>
            <Route path="/home" component={() => {}} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
