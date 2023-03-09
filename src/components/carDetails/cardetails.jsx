/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './details.css';

const DetailsPage = () => {
  //test: grabing id from url  
  const { id } = useParams(); 
  console.log(id);
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/cars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data));
  }, [id]);

  return (
    <div>
      {car ? (
        <section className='details-holder'>
          <img src={car.image_url} className='d-car-image' />
          <div>
          <h2>NAME: {car.name}</h2>
          <p>PRICE: {car.price}$</p>
          <p>DISCRIPTION: {car.description}</p>
          <p>TEST DRIVE FEE: {car.test_drive_fee}$</p>
          <p>MODEL: {car.model}</p>
          <p>YEAR MANUFACTURED: {car.year}</p>
          <button>Reserve</button>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;