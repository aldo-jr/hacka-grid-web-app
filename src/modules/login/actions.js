import * as TYPES from "./actionTypes";

export const requestSignIn = () => dispatch => {
  dispatch({ type: TYPES.SIGN_IN_REQUESTED });
};

export const signInFailed = err => dispatch => {
  dispatch({ type: TYPES.SIGN_IN_ERROR, payload: { error: err } });
};

export const signInSucceeded = user => dispatch => {
  dispatch({ type: TYPES.SIGN_IN_SUCCESS, payload: { data: user } });
};
