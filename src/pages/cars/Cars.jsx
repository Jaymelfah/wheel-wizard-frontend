import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  }, []);
  return (
    <div className="d-flex flex-row cars-container">
      <button type="button" onClick={handlePrevPage} className="pagination-btn btn">
        {'<'}
      </button>
      {cars.slice((currentPage - 1) * 3, currentPage * 3).map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
      <button type="button" onClick={handleNextPage} className="pagination-btn btn">
        {'>'}
      </button>
    </div>
  );
}

export default Cars;
