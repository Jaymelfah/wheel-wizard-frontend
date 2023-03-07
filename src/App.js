import React from 'react';
import './App.css';
import ReservationForm from './components/reservationForm/ReservationForm';
// import UserReservationTable from './components/userReservationTable/UserReservationTable';
// import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="app">
      <div className="d-flex flex-row">
        {/* <SideBar /> */}
        <ReservationForm />
        {/* <UserReservationTable /> */}
      </div>
    </div>
  );
}

export default App;
