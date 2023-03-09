import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import { createCar } from './car/car';
import { authReducer } from './auth/auth';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCar,
  auth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
});
