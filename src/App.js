import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReservationForm from './components/reservationForm/ReservationForm';
import UserReservationTable from './components/userReservationTable/UserReservationTable';
import SideBar from './components/sidebar/SideBar';
import Cars from './pages/cars/Cars';
import AddCar from './components/addCar/AddCar';
import RemoveCar from './components/deleteCar/deletecar';

function App() {
  return (
    <div className="app">
      <div className="main-container d-flex flex-row">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/delete-car" element={<RemoveCar />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/myreservations" element={<UserReservationTable />} />
      </Routes>
    </div>
  );
}

export default App;
