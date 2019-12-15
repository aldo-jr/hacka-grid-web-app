import * as TYPES from "./actionTypes";

import { createReducer } from "utils/domain";

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  error: ""
};

export default createReducer(initialState, {
  [TYPES.SIGN_IN_REQUESTED]: () => ({
    ...initialState,
    loading: true
  }),
  [TYPES.SIGN_IN_SUCCESS]: (_, action) => ({
    ...initialState,
    loaded: true,
    data: action.payload.data
  }),
  [TYPES.SIGN_IN_ERROR]: (_, action) => ({
    ...initialState,
    loaded: false,
    error: action.payload.error
  }),
  [TYPES.SIGN_OUT]: _ => initialState
});
