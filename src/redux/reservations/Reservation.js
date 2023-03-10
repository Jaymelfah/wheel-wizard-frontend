import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/reservations';
const initialState = [];
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.eLvmI-jvl7iBj2Kix4Kor20Nwur4F53KuB1NayRYJaQ';

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
    body: JSON.stringify({ reservation: payload }),
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
        state.reservations.filter((reservation) => reservation.id !== action.payload.id);
      });
  },
});

export default ReservationSlice.reducer;
