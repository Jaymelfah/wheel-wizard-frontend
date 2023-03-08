import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import Cars from './pages/cars/Cars';
import AddCar from './components/addCar/AddCar';

function App() {
  return (
    <div className="app">
      <div className="main-container d-flex flex-row">
        <SideBar />
        <Cars />
      </div>
      <Routes>
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
