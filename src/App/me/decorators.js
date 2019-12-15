import { branch, compose, renderComponent } from "recompose";

import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

export const requiresUserAuthenticated = compose(
  connect(state => ({
    currentUser: state.login.data
  })),
  branch(
    ({ currentUser }) => isEmpty(currentUser),
    renderComponent(() => <Redirect to="/login" />)
  )
);
