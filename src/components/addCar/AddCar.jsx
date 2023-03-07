/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCar } from '../../redux/car/car';
import './addcar.css';

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    test_drive_fee: '',
    model: '',
    year: '',
  });
  const navigate = useNavigate();
  const gohome = () => navigate('/');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const car = {
      name: carData.name,
      description: carData.description,
      price: carData.price,
      image: carData.image,
      test_drive_fee: carData.test_drive_fee,
      model: carData.model,
      year: carData.year,
    };
    dispatch(createCar(car));
    gohome();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({ ...carData, [name]: value });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
      >
        <h2 className="title">
          Add a new car
        </h2>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Enter Car name"
            value={carData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="form-control w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={carData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full form-control"
            placeholder="Description"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={carData.test_drive_fee}
            placeholder="Test_drive_fee"
            name="test_drive_fee"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={carData.model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={carData.price}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="year form-control">
          <sapn>Year</sapn>
          <input
            type="date"
            value={carData.year}
            name="year"
            onChange={handleInputChange}
            className="form-control"
            required
          />

        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCar;
