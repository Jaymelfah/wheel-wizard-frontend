import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import { createCar } from './car/car';
import { authReducer } from './auth/auth';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCar,
  auth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
