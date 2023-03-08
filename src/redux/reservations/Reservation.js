import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3002/api/v1/reservations';
const initialState = [];
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.DNCB8vy2lKn7B4CEM-VF1AAPP1ZSXg41S6HPNNbyUjI';

export const fetchReservations = createAsyncThunk('reservations/getData', async () => {
  const response = await fetch(url, {
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
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ car: payload }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  (await response.text());
});

export const deleteReservation = createAsyncThunk('reservations/deleteData', async (id) => {
  const remove = await fetch(`${url}/${id}`, {
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
        state.filter((reservation) => reservation.id !== action.payload.id);
      });
  },
});

export default ReservationSlice.reducer;
