import { SET_CONTACTS } from '../types';
const initialState = {
  contacts:[]
};
const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    default:
      return state;
  }
};
export default ContactReducer;
