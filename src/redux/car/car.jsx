/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'http://localhost:3002/api/v1/cars';

const initialState = {
  status: null,
};

export const createCar = createAsyncThunk(
  'create/createCar',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(Url, payload, {
        car: payload,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const createCarSlice = createSlice({
  name: 'newCar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCar.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(createCar.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(createCar.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default createCarSlice.reducer;
