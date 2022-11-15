import { GET_CONTACTS, SET_CONTACTS } from '../types';

export const setContacts = data => {
  try {
    return dispatch => {
      dispatch({
        type: SET_CONTACTS,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};

export const getContacts = data => {
  try {
    return dispatch => {
      dispatch({
        type: GET_CONTACTS,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};
