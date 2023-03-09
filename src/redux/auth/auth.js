import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types';
import getToken from '../../APIs/user';

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
};

export const login = (reqBody) => async (dispatch) => {
  try {
    const token = await getToken(reqBody);
    console.log('here is the token: ', token);
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
