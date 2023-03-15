import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../constants';

const BASE_URL = `${URL}/api/v1/reservations`;

export const fetchReservations = createAsyncThunk(
  'reservations/getData',
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addData',
  async (payload) => {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({ reservation: payload }),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('here is addreservation action');
    return response;
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteData',
  async (id) => {
    const token = localStorage.getItem('token');
    const remove = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return remove.text();
  },
);

export const ReservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => action.payload)
      .addCase(addReservation.fulfilled, (state, action) => [...state, action.payload])
      .addCase(deleteReservation.fulfilled, (state, action) => [
        ...state.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
      ]);
  },
});

export default ReservationSlice.reducer;
