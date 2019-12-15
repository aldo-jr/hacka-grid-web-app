import { Route, Switch } from "react-router-dom";

import Form from "modules/form";
import Header from "modules/header";
import React from "react";
import { requiresUserAuthenticated } from "../decorators";

@requiresUserAuthenticated
class MeView extends React.Component {
  render() {
    return (
      <section>
        <Header />

        <Route exact path="/me/form" component={Form} />
        <Route exact path="/me/mkt/plans" component={Form} />
      </section>
    );
  }
}

export default MeView;
