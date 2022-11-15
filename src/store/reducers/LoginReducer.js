import {IS_LOGGED_IN, IS_PRIVACY_POLICY_ACCEPTED, LOG_OUT} from '../types';
const initialState = {
    userdata: null,
    usermobiledata: null,
    is_privacy_accepted: false,
    is_logged_in: false,
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_PRIVACY_POLICY_ACCEPTED:
            return {
                ...state,
                is_privacy_accepted: action.payload,
            };
        case IS_LOGGED_IN:
            return {
                ...state,
                userdata: action.payload.userdata,
                usermobiledata: action.payload.usermobiledata,
                is_logged_in: true,
            };
        case LOG_OUT:
            return {
                ...state,
                userdata: null,
                mobiledata: null,
                is_logged_in: false,
            };

        default:
            return state;
    }
};
export default LoginReducer;
