import React, { useState } from 'react';
import Select from 'react-select';
import Modal from '../modal/Modal';
import './reservationForm.css';

const cities = [
  { value: 'New York', label: 'New York' },
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Bradenton Beach', label: 'Bradenton Beach' },
  { value: 'Charlottetown', label: 'Charlottetown' },
  { value: 'Bangkog', label: 'Bangkog' },
  { value: 'Beijing', label: 'Beijing' },
];

const ReservationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

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
          <p style={{ color: '#fff' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis. lorem10
          </p>
        </div>
        <div className="buttons" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
          <Select
            id="select_city"
            className="select"
            options={cities}
            value={selectedCity}
            onChange={setSelectedCity}
            placeholder="Select a City..."
            required
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
              placeholder: (provided) => ({
                ...provided,
                color: 'white',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: 'white',
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 100,
                width: '200px',
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
};

export default ReservationForm;
