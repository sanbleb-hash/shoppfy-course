import { 
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS
  } from '../constants';

export const userLoginReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case USER_LOGIN_FAIL:
            return { loading: false, Error: action.payload };

        case USER_LOGOUT:
            return { loading: false, Error: action.payload };

        default:
            return state;
    }

}