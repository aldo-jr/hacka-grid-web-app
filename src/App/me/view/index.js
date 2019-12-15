import { Route, Switch } from "react-router-dom";

import Form from "modules/form";
import Header from "modules/header";
import IndicaSeg from "modules/indica-seg";
import MeusPlanos from "modules/meus-planos";
import Plans from "modules/plans";
import React from "react";
import Score from "modules/score";
import { requiresUserAuthenticated } from "../decorators";

@requiresUserAuthenticated
class MeView extends React.Component {
  render() {
    return (
      <section>
        <Header />

        <Route exact path="/me/form" component={Form} />
        <Route exact path="/me/mkt/plans" component={Plans} />
        <Route exact path="/me/indica-seg" component={IndicaSeg} />
        <Route exact path="/me/meus-planos" component={MeusPlanos} />
        <Route exact path="/me/meus-pontos" component={Score} />
      </section>
    );
  }
}

export default MeView;
