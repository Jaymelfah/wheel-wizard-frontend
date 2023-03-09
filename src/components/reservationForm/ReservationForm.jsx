import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import Modal from '../modal/Modal';
import './reservationForm.css';

const cities = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'san-francisco', label: 'San Francisc' },
  { value: 'bradenton-beach', label: 'Bradenton Beach' },
  { value: 'charlottetown', label: 'Charlottetown' },
  { value: 'bankog', label: 'Bankog' },
  { value: 'Beijing', label: 'Beijing' },
];

function ReservationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  // const handleCitySelection = (city) => {
  //   setSelectedCity(city);
  // };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-icon">
            <i className="fas fa-bars" />
          </div>
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="title">
          <h4>BOOK A TEST DRIVE WITH WHEEL-WIZARD</h4>
          <hr className="divider" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis. lorem10
          </p>
        </div>
        <div className="buttons" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
          {/* <button type="button" onClick={() =>
            handleCitySelection(selectedCity)}>
            Select City
            </button> */}
          <Select
            id="select_city"
            className="select"
            options={cities}
            value={selectedCity}
            onChange={setSelectedCity}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: '25px',
                height: '2.7rem',
                background: '#a2d31a',
                border: '1px solid white',
                width: '10.2rem',
                color: 'white',
              }),
            }}
          />

          <button
            id="book_now"
            type="button"
            style={{ marginLeft: '1rem' }}
            onClick={handleModalOpen}
          >
            Book Now
          </button>
        </div>

      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="cls-m-btn" type="button" onClick={handleModalClose}>X</button>
            <br />
            <Modal selectedCity={selectedCity.value} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationForm;
