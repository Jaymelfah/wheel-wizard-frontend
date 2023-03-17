import { URL } from '../constants';

const getCarsFromDB = async () => {
  const response = await fetch(`${URL}/api/v1/cars`);
  const data = await response.json();
  return data;
};

export default getCarsFromDB;
