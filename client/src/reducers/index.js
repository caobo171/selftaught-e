import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import userReducer from './userReducer';
import textestReducer from './texttestReducer'

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  form: reduxForm,
  texttest: textestReducer 
});