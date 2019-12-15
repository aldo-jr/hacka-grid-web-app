import "./indes.scss";
import "firebase/auth";

import * as firebase from "firebase/app";

import Button from "components/Button";
import GoogleIcon from "modules/login/assets/google-ico.png";
import MainLogo from "assets/main-logo.png";
import React from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "App/config/firebase";
import { isEmpty } from "ramda";
import withFirebaseAuth from "react-with-firebase-auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
class LoginView extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    const {
      props: { signInWithEmailAndPassword },
      state: { username, password }
    } = this;
    event.preventDefault();
    this.props.requestSignIn();
    signInWithEmailAndPassword(username, password).then(this.onSuccessSignIn);
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleGoogleSignIn = () => {
    this.props.requestSignIn();
    this.props.signInWithGoogle().then(this.onSuccessSignIn);
  };

  onSuccessSignIn = res => {
    this.props.signInSucceeded(res.user);
  };

  onFailSignIn = this.props.signInFailed;

  render() {
    const {
      handleSubmit,
      handleUsernameChange,
      handlePasswordChange,
      handleGoogleSignIn,
      props: { currentUser },
      state: { username, password }
    } = this;

    return (
      <section className="login-view">
        <header className="login-view__header">
          <img className="login-view__logo" src={MainLogo} alt="MeSeg" />
        </header>

        <section className="login-view__title">
          <h1>Login</h1>
        </section>

        {isEmpty(currentUser) ? (
          <section className="login-view__content-container">
            <form onSubmit={handleSubmit}>
              <input
                required
                className="login-view__input"
                type="email"
                name="username"
                placeholder="E-mail"
                onChange={handleUsernameChange}
                value={username}
                autoFocus
              />

              <input
                required
                className="login-view__input"
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handlePasswordChange}
                value={password}
              />
              <Button
                type="submit"
                color="full-primary"
                className="login-view__google-button"
              >
                Entrar
              </Button>
            </form>
            <Button
              color="full-primary"
              icon={GoogleIcon}
              className="login-view__google-button"
              onClick={handleGoogleSignIn}
            >
              Entrar com a conta google
            </Button>
          </section>
        ) : (
          <Redirect to="/me" />
        )}
      </section>
    );
  }
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(LoginView);
