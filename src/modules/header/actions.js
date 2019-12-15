import * as TYPES from "modules/login/actionTypes";

export const logout = () => dispatch => {
  dispatch({ type: TYPES.LOGOUT });
};