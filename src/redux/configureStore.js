import { configureStore } from '@reduxjs/toolkit';
import { createCar } from './car/car';

export default configureStore({
  reducer: {
    newcar: createCar,
  },
});
