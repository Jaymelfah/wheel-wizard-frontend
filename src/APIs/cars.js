const getCarsFromDB = async () => {
  const response = await fetch('http://localhost:3002/api/v1/cars');
  const data = await response.json();
  return data;
};

export default getCarsFromDB;
