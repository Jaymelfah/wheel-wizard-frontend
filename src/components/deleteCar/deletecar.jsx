import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, deleteCar } from '../../redux/deletecar/deletecar';
import './deletecar.css';

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
    <div className="d-flex w-full del-container">
      <h2>
        Delete a car
      </h2>
      <ol className="list-group list-group-numbered del-list">
        {cars.map((car) => (
          <li key={car.id} className="list-group-item d-flex justify-content-between align-items-start">
            <span className="images">
              {' '}
              <img src={car.image_url} alt="img" className="del-car-image d-flex flex-column" />
            </span>
            <span className="cars">{car.name}</span>
            <span className="del">
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
