import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from '../types';
import { getToken, createAccount } from '../../APIs/user';

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
  success: null,
};

export const login = (reqBody) => async (dispatch) => {
  try {
    const token = await getToken(reqBody);
    localStorage.setItem('token', token);
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

export const signup = (reqBody) => async (dispatch) => {
  try {
    const success = await createAccount(reqBody);
    dispatch({ type: SIGNUP_SUCCESS, payload: success });
  } catch (error) {
    dispatch({ type: SIGNUP_FAIL, payload: error });
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, success: true, message: action.payload };
    case SIGNUP_FAIL:
      return { ...state, success: false, error: action.payload };
    case LOGOUT:
      return { success: true, isAuthenticated: false, token: null };
    default:
      return state;
  }
};
