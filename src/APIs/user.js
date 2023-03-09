import axios from 'axios';

const BASE_URL = 'http://localhost:3002';

const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/sign_in`, { user: reqBody });
    return response.data.token;
  } catch (error) {
    throw new Error(error);
  }
};

export default getToken;
