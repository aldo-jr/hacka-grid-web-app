import { combineReducers } from 'redux';
import formReducer from 'modules/form/reducers';
import loginReducer from 'modules/login/reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer,
});

export default rootReducer;
