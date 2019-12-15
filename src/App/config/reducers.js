import { combineReducers } from 'redux';
import loginReducer from 'modules/login/reducers';

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;
