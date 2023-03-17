import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import {
  addReservation,
  fetchReservations,
} from '../../redux/reservations/reservation';
import loader from '../../assets/loader2.gif';

const cities = [
  { value: 'New York', label: 'New York' },
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Bradenton Beach', label: 'Bradenton Beach' },
  { value: 'Charlottetown', label: 'Charlottetown' },
  { value: 'Bangkog', label: 'Bangkog' },
  { value: 'Beijing', label: 'Beijing' },
];

const Modal = ({ selectedCar, setIsModalOpen }) => {
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const carId = selectedCar ? selectedCar.id : null;
    const selectedCityIsValid = selectedCity;
    if (!selectedCityIsValid) {
      toast.error('Please Select a City');
      setIsLoading(false);
      return;
    }
    const data = {
      reservation_date: reservationDate,
      duration,
      car_id: carId,
      city: selectedCity.value,
    };
    dispatch(addReservation(data)).then(() => {
      toast.info('Successfully made a reservation');
      dispatch(fetchReservations()).then(() => gohome());
      setIsLoading(false);
      setIsModalOpen(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h3>Fill the fields below</h3>

      <label htmlFor="carName" className="d-flex flex-column">
        Car Name:
        <select id="carName">
          <option key={selectedCar.id} value={selectedCar.name}>
            {selectedCar.name}
          </option>
        </select>
      </label>

      <Select
        id="select-city"
        aria-labelledby="select_city"
        placeholder="Select a city"
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

      <label htmlFor="duration">
        Duration:
        <input
          required
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>

      <label htmlFor="reservationDate">
        Reservation Date:
        <input
          type="date"
          required
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
      </label>

      <button type="submit">
        {isLoading ? (
          <img src={loader} alt="loading" className="spinner" />
        ) : (
          'Book Reservation'
        )}
      </button>
    </form>
  );
};

Modal.propTypes = {
  selectedCity: PropTypes.string,
}.isRequired;

export default Modal;
