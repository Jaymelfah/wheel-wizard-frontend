import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../constants';

export const createAccount = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users`, { user: reqBody });
    toast.success('Signed Up Successfully');
    return response.data;
  } catch (error) {
    toast.error('Oops, check password confirmation');
    throw new Error(error);
  }
};

export const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users/sign_in`, {
      user: reqBody,
    });
    toast.success('Logged in successfully');
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Invalid email or password');
    }
    throw new Error(error);
  }
};
