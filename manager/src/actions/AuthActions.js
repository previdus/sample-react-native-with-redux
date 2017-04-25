import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_INPROGRESS } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const loginUser = ({email, password}) =>{
return (dispatch) => {
  dispatch({type: LOGIN_USER_INPROGRESS});
  firebase.auth().signInWithEmailAndPassword(email, password).
  then(user => loginUserSuccess(dispatch, user))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password).
    then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  });
};
};

const loginUserFail = (dispatch) => {
  dispatch({  type: LOGIN_USER_FAILURE});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};


export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
