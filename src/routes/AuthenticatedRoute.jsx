import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Cars from '../pages/cars/Cars';
import AddCar from '../components/addCar/AddCar';

const AuthenticatedRoute = () => (
  <>
    <div className="main-container d-flex flex-row">
      <SideBar />
    </div>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Cars />} />
      <Route path="/add-car" element={<AddCar />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
