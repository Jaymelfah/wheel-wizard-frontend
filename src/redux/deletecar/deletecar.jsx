/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCarsFromDB from '../../APIs/cars';

const Url = 'http://localhost:3002/api/v1/cars';

export const deleteCar = createAsyncThunk(
  'delete/deleteCar',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.delete(`${Url}/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getAllCars = createAsyncThunk('Cars', async () => getCarsFromDB());

const deleteCarSlice = createSlice({
  name: 'delete',
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        const filteredCars = state.cars.filter((car) => car.id !== action.payload.id);
        state.cars = filteredCars;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default deleteCarSlice.reducer;
