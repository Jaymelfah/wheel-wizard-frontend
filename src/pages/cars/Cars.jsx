/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as RxIcons from 'react-icons/rx';
import { getCars } from '../../redux/cars/cars';
import CarCard from './CarCard/CarCard';
import './cars.css';

function Cars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const carsContainerRef = useRef(null);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const handleNextPage = () => {
    if (carsContainerRef.current) {
      const container = carsContainerRef.current;
      container.scrollLeft += container.offsetWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft) {
        setNextButtonDisabled(true);
      }
      setPrevButtonDisabled(false);
    }
  };

  const handlePrevPage = () => {
    if (carsContainerRef.current) {
      const container = carsContainerRef.current;
      container.scrollLeft -= container.offsetWidth;
      if (container.scrollLeft === 0) {
        setPrevButtonDisabled(true);
      }
      setNextButtonDisabled(false);
    }
  };

  useEffect(() => {
    const container = carsContainerRef.current;
    if (container) {
      setPrevButtonDisabled(container.scrollLeft === 0);
      setNextButtonDisabled(
        container.scrollLeft >= container.scrollWidth - container.clientWidth,
      );
    }
  }, [cars]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center cars-cont">
      <h2 style={{ marginTop: '3rem' }}>Latest Models</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>Please select a car model</p>
      <div
        className="d-flex flex-row cars-container"
        ref={carsContainerRef}
      >
        <button
          type="button"
          onClick={handlePrevPage}
          className="pagination-btn btn left"
          disabled={prevButtonDisabled}
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
        <div className="d-flex flex-row align-items-baseline justify-content-center">
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNextPage}
          className="pagination-btn btn right"
          disabled={nextButtonDisabled}
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </div>
  );
}

export default Cars;
