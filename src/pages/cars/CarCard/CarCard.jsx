/* eslint-disable */
import React from 'react';
import './car-card.css'

function CarCard({ car }) {
  return (
    <div className="car-card d-flex flex-column p-5">
      <img src={car.image_url} className='car-image d-flex flex-column' />
      <h2>{car.name}</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>{car.description}</p>
    </div>
  );
}

export default CarCard;
