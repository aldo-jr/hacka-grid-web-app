import "firebase/auth";

import * as firebase from "firebase/app";

import React from "react";
import firebaseConfig from "App/config/firebase";
import withFirebaseAuth from "react-with-firebase-auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
class LoginView extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <header className="App-header">
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <div>
            <img
              className="app-main__user-avatar"
              src={user.photoURL}
              alt={user.displayName}
            />
            <button
              onClick={() => {
                console.log(user);
              }}
            >
              print user info
            </button>
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    );
  }
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(LoginView);
