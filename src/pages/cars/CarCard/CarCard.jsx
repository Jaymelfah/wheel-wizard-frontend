/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './car-card.css'

function CarCard({ car }) {
 
  return (
    <Link to={`/details/${car.id}`}>
    <div className="car-card d-flex flex-column p-5">
      <img src={car.image_url} className='car-image d-flex flex-column' />
      <h2>{car.name}</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>{car.description}</p>
    </div>
    </Link>
  );
}

export default CarCard;
