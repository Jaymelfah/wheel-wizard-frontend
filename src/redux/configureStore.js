import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import { createCar } from './car/car';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCar,
});

export default configureStore({
  reducer: rootReducer,
});
