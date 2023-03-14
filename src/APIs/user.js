import axios from 'axios';
import { toast } from 'react-toastify';
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
    if (error.response.status === 401) {
      toast.error('Invalid email or password', { position: 'top-right' });
    }
    throw new Error(error);
  }
};
