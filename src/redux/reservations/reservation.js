import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../constants';

const BASE_URL = `${URL}/api/v1/reservations`;

export const fetchReservations = createAsyncThunk('reservations/getData', async () => {
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
});

export const addReservation = createAsyncThunk('reservations/addData', async (payload) => {
  const token = localStorage.getItem('token');
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
  const token = localStorage.getItem('token');
  const remove = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  (await remove.text());
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(addReservation.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(addReservation.fulfilled, (state, action) => {
        const updatedReservations = [...state.reservations, action.payload];
        return {
          ...state,
          reservations: updatedReservations,
          loading: false,
          error: null,
        };
      })
      .addCase(addReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => {
        const filteredReservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        );
        return {
          ...state,
          reservations: filteredReservations,
          loading: false,
          error: null,
        };
      })
      .addCase(deleteReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export default reservationSlice.reducer;
