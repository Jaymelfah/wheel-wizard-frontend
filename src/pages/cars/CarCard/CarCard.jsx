/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './car-card.css'
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ImageWithColors from './imageWithColor';

function CarCard({ car }) {
  const imageRef = useRef(null)
  const [image, setImage] = useState('')
  useEffect(() => {
    const image = imageRef.current
    setImage(image.src)
  }, [])

  return (
    <Link className='link' to={`/details/${car.id}`}>
    <div className="car-card d-flex flex-column p-5 position-relative">
      <img src={car.image_url} className='car-image d-flex flex-column' ref={imageRef} />
      <ImageWithColors src={image} />
      <h2 style={{margin: '3rem'}}>{car.name}</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>{car.description}</p>
      <div className="cars-icons d-flex flex-row">
        <IconContext.Provider value={{ color: '#c3c0c0' }}>
          <FaIcons.FaTwitter />
          <FaIcons.FaFacebookF />
          <FaIcons.FaPinterestP />
        </IconContext.Provider>
      </div>
    </div>
    </Link>
  );
}

export default CarCard;
