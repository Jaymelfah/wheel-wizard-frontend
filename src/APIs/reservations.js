import { URL } from '../constants';

const getReservations = async () => {
  const res = await fetch(`${URL}/api/v1/reservations`);
  const data = await res.json();
  return data;
};

export default getReservations;
