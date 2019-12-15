import "./indes.scss";
import "firebase/auth";

import * as firebase from "firebase/app";

import Button from "components/Button";
import GoogleIcon from "modules/login/assets/google-ico.png";
import MainLogo from "assets/main-logo.png";
import React from "react";
import firebaseConfig from "App/config/firebase";
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
    const {props: {signInWithEmailAndPassword}, state: {username, password}} = this;
    event.preventDefault();

    signInWithEmailAndPassword(username, password)
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const {
      handleSubmit,
      handleUsernameChange,
      handlePasswordChange,
      props: { user, signOut, signInWithGoogle },
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

        {!user ? (
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
              onClick={signInWithGoogle}
            >
              Entrar com a conta google
            </Button>
          </section>
        ) : (
          <button onClick={signOut}>sair</button>
        )}
      </section>
    );
  }
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(LoginView);
