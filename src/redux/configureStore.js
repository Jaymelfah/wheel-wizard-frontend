import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import reservationReducer from './reservations/reservation';
import createCarReducer from './car/car';
import deleteCarReducer from './deletecar/deletecar';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCarReducer,
  delete: deleteCarReducer,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
});
