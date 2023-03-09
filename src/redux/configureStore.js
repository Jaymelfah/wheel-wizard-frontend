import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import { createCar } from './car/car';
// eslint-disable-next-line import/extensions
import reservationReducer from './reservations/reservation.js';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCar,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
});
