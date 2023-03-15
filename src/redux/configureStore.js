/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import reservationReducer from './reservations/reservation.js';
import createCarReducer from './car/car';
import deleteCarReducer from './deletecar/deletecar';
import { authReducer } from './auth/auth';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
  reservations: [],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCarReducer,
  auth: authReducer,
  delete: deleteCarReducer,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
