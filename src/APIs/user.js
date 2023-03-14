import axios from 'axios';
import { URL } from '../constants';

export const createAccount = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users`, { user: reqBody });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users/sign_in`, {
      user: reqBody,
    });
    return response.data.token;
  } catch (error) {
    // return error.response.data;
    throw new Error(error);
  }
};
