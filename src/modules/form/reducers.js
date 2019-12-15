import * as TYPES from "./actionTypes";

import { LOGOUT } from "modules/login/actionTypes";
import { createReducer } from "utils/domain";

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  error: ""
};

export default createReducer(initialState, {
  [TYPES.SEARCH_PLANS_REQUESTED]: () => ({
    ...initialState,
    loading: true
  }),
  [TYPES.SEARCH_PLANS_SUCCESS]: (_, action) => ({
    ...initialState,
    loaded: true,
    data: action.payload.data
  }),
  [TYPES.SEARCH_PLANS_ERROR]: (_, action) => ({
    ...initialState,
    loaded: false,
    error: action.payload.error
  }),
  [LOGOUT]: _ => initialState
});
