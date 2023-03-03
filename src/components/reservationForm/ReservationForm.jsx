/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './reservationForm.css';

const ReservationForm = () => {
  const [userId, setUserId] = useState('');
  const [carId, setCarId] = useState('');
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userId,
      carId,
      duration,
      reservationDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='note'>Please fill the fields below</h3>
      <label htmlFor="userId">User ID:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />

      <label htmlFor="carId">Car ID:</label>
      <input
        type='text'
        id='carId'
        value={carId}
        placeholder="Car ID"
        onChange={(e) => setCarId(e.target.value)}
      />

      <label htmlFor='duration'>Duration:</label>
      <input
        type="number"
        id="duration"
        value={duration}
        placeholder="Duration"
        onChange={(e) => setDuration(e.target.value)}
      />

      <label htmlFor="reservationDate">Reservation Date:</label>
      <input
        type="date"
        id='reservationDate'
        value={reservationDate}
        placeholder="Date"
        onChange={(e) => setReservationDate(e.target.value)}
      />
      <button type='submit'>Book Reservation</button>
    </form>
  );
};

export default ReservationForm;
