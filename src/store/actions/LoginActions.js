import { IS_LOGGED_IN, IS_PRIVACY_POLICY_ACCEPTED, LOG_OUT } from '../types';

export const AcceptPrivacyPolicy = data => {
  try {
    return dispatch => {
      dispatch({
        type: IS_PRIVACY_POLICY_ACCEPTED,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export const UserLoggedIn = data => {
  try {
    return dispatch => {
      dispatch({
        type: IS_LOGGED_IN,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export const UserLoggedOut = data => {
  try {
    return dispatch => {
      dispatch({
        type: LOG_OUT,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};
