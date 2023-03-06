import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';

const rootReducer = combineReducers({
  cars: carsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
