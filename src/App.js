import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import Cars from './pages/cars/Cars';
import AddCar from './components/addCar/AddCar';
import LoginForm from './pages/login/Login';

function App() {
  return (
    <div className="app">
      <div className="main-container d-flex flex-row">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
