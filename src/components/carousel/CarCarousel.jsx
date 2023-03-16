import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import * as RxIcons from 'react-icons/rx';
import CarCard from '../../pages/cars/CarCard/CarCard';
import './carousel.css';

const CarCarousel = ({ cars }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index < cars.length - 3) {
      setIndex(index - 3);
    } else {
      setIndex(index - 3);
    }
  };

  const handleNext = () => {
    if (index < cars.length - 3) {
      setIndex(index + 3);
    }
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === cars.length;

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handlePrev}
          className="pagination-btn btn left"
          disabled={isPrevDisabled}
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="w-100"
        controls={false}
        indicators
      >
        {cars.map((car, i) => (
          <Carousel.Item key={car.id}>
            <div className="d-flex justify-content-around">
              {cars.slice(i, i + 3).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handleNext}
          className="pagination-btn btn right"
          disabled={isNextDisabled}
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </>
  );
};

CarCarousel.propTypes = ({
  cars: PropTypes.array,
}).isRequired;

export default CarCarousel;
