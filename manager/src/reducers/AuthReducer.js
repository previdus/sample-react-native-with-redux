import {EMAIL_CHANGED, LOGIN_USER_INPROGRESS, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from '../actions/types';

const INITIAL_STATE = {email: '', password: '',loginInProgress:false, user : null, error :''};

export default(state = INITIAL_STATE, action) =>{
  switch(action.type){
    case LOGIN_USER_INPROGRESS:
      return { ...state, loginInProgress: true};
    case LOGIN_USER_FAILURE:
      return { ...state, loginInProgress: false, password : '', error: 'Authentication failure.'};
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user:action.payload, loginInProgress: false, error:''};
    case EMAIL_CHANGED:
      return { ...state, email:action.payload};
      case PASSWORD_CHANGED:
        return { ...state, password:action.payload};
    default:
      return state;
  }
};
