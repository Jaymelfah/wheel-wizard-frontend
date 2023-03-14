/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from './detailsmodal';
import './details.css';
import { URL } from '../../constants';
import loader from '../../assets/loader.gif'

const DetailsPage = () => { 
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(`${URL}/api/v1/cars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data));
  }, [id]);

  return (
    <div className='main-holder'>
      {car ? (
        <section className='details-holder'>
          <img src={car.image_url} className='d-car-image' />
          <div className='car-info'>
          <h2>NAME: {car.name}</h2>
          <p>PRICE: {car.price}$</p>
          <p>DISCRIPTION: {car.description}</p>
          <p>TEST DRIVE FEE: {car.test_drive_fee}$</p>
          <p>MODEL: {car.model}</p>
          <p>YEAR MANUFACTURED: {car.year}</p>
          <button onClick={handleModalOpen}>Reserve</button>
          </div>
        </section>
      ) : (
       <img src={loader} alt="loading" />
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="cls-m-btn" type="button" onClick={handleModalClose}>X</button>
            <br />
            <Modal selectedCar={car} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;