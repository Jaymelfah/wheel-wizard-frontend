/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as RxIcons from 'react-icons/rx';
import { getCars } from '../../redux/cars/cars';
import './cars.css';
import CarCarousel from '../../components/carousel/CarCarousel';

function Cars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100">
      <h2 className="cars-section-title">Latest Models</h2>
      <p style={{ color: 'rgb(182 183 184)' }} className="mb-0">Please select a car model</p>
      <div className="d-flex flex-row cars-container position-relative justify-content-around">
        <CarCarousel cars={cars} />
      </div>
    </div>
  );
}

export default Cars;
