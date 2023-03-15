/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import { addReservation, fetchReservations } from '../../redux/reservations/reservation';

const cities = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'san-francisco', label: 'San Francisc' },
  { value: 'bradenton-beach', label: 'Bradenton Beach' },
  { value: 'charlottetown', label: 'Charlottetown' },
  { value: 'bankog', label: 'Bankog' },
  { value: 'Beijing', label: 'Beijing' },
];

const Modal = ({ selectedCar, setIsModalOpen }) => {
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const carId = selectedCar ? selectedCar.id : null;
    const data = {
      reservation_date: reservationDate,
      duration,
      car_id: carId,
      city: selectedCity.value,
    };
    dispatch(addReservation(data));
    dispatch(fetchReservations()).then(() => gohome());
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Fill the fields below</h3>

      <label htmlFor="carName">Car Name:</label>
      <select id="carName">
        <option key={selectedCar.id} value={selectedCar.name}>{selectedCar.name}</option>
      </select>

      <label htmlFor="select_city">Select a city:</label>
      <Select
        aria-labelledby="select_city"
        className="select"
        options={cities}
        required
        value={selectedCity}
        onChange={setSelectedCity}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: '25px',
            height: '2.7rem',
            background: '#c2d6ae',
            border: '1px solid white',
            width: '10.2rem',
            color: 'white',
            alignSelf: 'flex-start',
          }),
        }}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        required
        type="number"
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <label htmlFor="reservationDate">Reservation Date:</label>
      <input
        type="date"
        required
        id="reservationDate"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />

      <button type="submit">Book Reservation</button>

      <style>
        {`
    form {
      padding: 0 1rem;
      font-size: 1rem;
    }

    label {
      margin-top: 1rem;
      font-size: 0.8rem;
    }

    input,
    select {
      margin-top: 0.5rem;
      font-size: 1rem;
      padding: 0.5rem;
    }

    button {
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0.5rem;
    }

    @media screen and (min-width: 768px) {
      form {
        font-size: 1.2rem;
      }

      label {
        margin-top: 1.5rem;
        font-size: 1rem;
      }

      input,
      select {
        margin-top: 1rem;
        font-size: 1.2rem;
        padding: 0.7rem;
      }

      button {
        margin-top: 1.5rem;
        font-size: 1.2rem;
        padding: 0.7rem;
      }
    }
  `}
      </style>
    </form>
  );
};

Modal.propTypes = ({
  selectedCity: PropTypes.string,
}).isRequired;

export default Modal;
