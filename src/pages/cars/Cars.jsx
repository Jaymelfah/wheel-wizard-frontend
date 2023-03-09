/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as RxIcons from 'react-icons/rx';
import { getCars } from '../../redux/cars/cars';
import CarCard from './CarCard/CarCard';
import './cars.css';

function Cars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(cars.length / 3));
  }, [handleNextPage]);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h2 style={{ marginTop: '3rem' }}>Latest Models</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>Please select a car model</p>
      <div className="d-flex flex-row cars-container">
        <button
          type="button"
          onClick={handlePrevPage}
          className="pagination-btn btn"
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
        <div className="d-flex flex-row flex-wrap align-items-baseline justify-content-center">
          {cars.slice((currentPage - 1) * 3, currentPage * 3).map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNextPage}
          className="pagination-btn btn right"
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </div>
  );
}

export default Cars;
