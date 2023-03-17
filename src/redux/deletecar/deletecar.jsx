import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCarsFromDB from '../../APIs/cars';
import { URL } from '../../constants';

const Url = `${URL}/api/v1/cars`;

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
      .addCase(getAllCars.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getAllCars.fulfilled, (state, action) => ({
        ...state,
        cars: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(getAllCars.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(deleteCar.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteCar.fulfilled, (state, action) => {
        const filteredCars = state.cars.filter((car) => car.id !== action.payload.id);
        return {
          ...state,
          cars: filteredCars,
          loading: false,
          error: null,
        };
      })
      .addCase(deleteCar.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default deleteCarSlice.reducer;
