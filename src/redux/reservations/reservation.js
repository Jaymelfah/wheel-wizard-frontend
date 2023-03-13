import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../constants';

const BASE_URL = `${URL}/api/v1/reservations`;
const initialState = [];
const token = localStorage.getItem('token');

export const fetchReservations = createAsyncThunk('reservations/getData', async () => {
  const response = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
});

export const addReservation = createAsyncThunk('reservations/addData', async (payload) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ reservation: payload }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  (await response.text());
});

export const deleteReservation = createAsyncThunk('reservations/deleteData', async (id) => {
  const remove = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  (await remove.text());
});

export const ReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => action.payload)
      .addCase(addReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations.filter((reservation) => reservation.id !== action.payload.id);
      });
  },
});

export default ReservationSlice.reducer;
