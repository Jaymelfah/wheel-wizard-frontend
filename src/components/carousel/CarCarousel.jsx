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
        setIndex(0);
      }
  };

  const handleNext = () => {
    if (index < cars.length - 3) {
      setIndex(index + 3);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center mt-3'>
      <button
          type="button"
          onClick={handlePrev}
          className="pagination-btn btn left"
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="w-100" controls={false}>
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
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </>
  );
};

export default CarCarousel;