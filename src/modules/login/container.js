import { requestSignIn, signInFailed, signInSucceeded } from "./actions";

import Login from "./view";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
  currentUser: state.login.data
});

const mapDispatchToProps = dispatch => ({
  requestSignIn: () => dispatch(requestSignIn()),
  signInFailed: err => dispatch(signInFailed(err)),
  signInSucceeded: user => dispatch(signInSucceeded(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
