import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import createCarReducer from './car/car';
import deleteCarReducer from './deletecar/deletecar';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCarReducer,
  delete: deleteCarReducer,
});

export default configureStore({
  reducer: rootReducer,
});
