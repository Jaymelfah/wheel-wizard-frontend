/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import { getCars } from '../../redux/cars/cars';
import { addReservation, fetchReservations } from '../../redux/reservations/reservation';

const Modal = ({ selectedCity, setIsModalOpen }) => {
  const [carName, setCarName] = useState('');
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const carsData = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');

  const cars = carsData.map((car) => ({
    id: car.id,
    car_name: car.name,
  }));

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCar = cars.find((car) => car.car_name === carName);
    const carId = selectedCar ? selectedCar.id : null;
    const data = {
      reservation_date: reservationDate,
      duration,
      car_id: carId,
      city: selectedCity,
    };
    dispatch(addReservation(data));
    dispatch(fetchReservations());
    setIsModalOpen(false);
    gohome();
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h3>Fill the fieds below</h3>

      <label htmlFor="carName">Car Name:</label>
      <select id="carName" value={carName} onChange={(e) => setCarName(e.target.value)}>
        <option value="">Select a car</option>
        {cars.map((car) => (
          <option key={car.id} value={car.car_name}>{car.car_name}</option>
        ))}
      </select>

      <label htmlFor="duration">Duration:</label>
      <input
        type="number"
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <label htmlFor="reservationDate">Reservation Date:</label>
      <input
        type="date"
        id="reservationDate"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />

      <button type="submit">Book Reservation</button>
    </form>
  );
};

Modal.propTypes = ({
  selectedCity: PropTypes.string,
}).isRequired;

export default Modal;
