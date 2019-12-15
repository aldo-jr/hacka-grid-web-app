import { branch, compose, renderComponent } from "recompose";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const requiresUserAuthenticated = compose(
  connect(state => {
    currentUser: state.login.data;
  }),
  branch(
    ({ currentUser }) => isNil(currentUser),
    renderComponent(<Redirect to="/login" />)
  )
);
