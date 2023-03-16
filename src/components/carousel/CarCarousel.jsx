/*eslint-disable*/
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CarCard from '../../pages/cars/CarCard/CarCard';
import * as RxIcons from 'react-icons/rx';
import './carousel.css'


const CarCarousel = ({ cars }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
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
      <div className='d-flex justify-content-center mt-3'>
      <button
          type="button"
          onClick={handlePrev}
          className="pagination-btn btn left"
          disabled={isPrevDisabled}
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="w-100" controls={false} indicators={true}>
        {cars.map((car, i) => {
            return (
              <Carousel.Item key={i}>
                <div className='d-flex justify-content-around'>
                  {cars.slice(i, i + 3).map((car, i) => (
                    <CarCard key={i} car={car} />
                  ))}
                </div>
              </Carousel.Item>
            );
        })}
      </Carousel>
      <div className='d-flex justify-content-center mt-3'>
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

export default CarCarousel;