const getReservations = async () => {
  const res = await fetch('http://localhost:3000/api/v1/reservations');
  const data = await res.json();
  return data;
};

export default getReservations;
