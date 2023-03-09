import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, deleteCar } from '../../redux/deletecar/deletecar';

const RemoveCar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  const { cars, loading, error } = useSelector((state) => state.delete);

  const handledelete = (carId) => {
    dispatch(deleteCar(carId));
  };

  const deletecar = (id) => {
    handledelete(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>
        Delete a car
      </h2>
      <ol className="list-group list-group-numbered">
        {cars.map((car) => (
          <li key={car.id} className="list-group-item d-flex justify-content-between align-items-start">
            {car.name}
            <span>
              <button
                type="button"
                onClick={() => deletecar(car.id)}
              >
                delete
              </button>
            </span>
          </li>

        ))}
      </ol>
    </div>
  );
};

export default RemoveCar;
