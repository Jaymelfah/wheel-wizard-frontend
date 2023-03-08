import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import { createCar } from './car/car';
import reservationReducer from './reservations/reservation';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCar,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
});
