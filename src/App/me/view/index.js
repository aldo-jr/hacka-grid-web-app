import Header from 'modules/header';
import React from "react";
import { requiresUserAuthenticated } from "../decorators";

@requiresUserAuthenticated
class MeView extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <h1>ÁREA AUTENTICADA</h1>
      </section>
    );
  }
}

export default MeView;
