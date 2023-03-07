import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Cars from './pages/cars/Cars';

function App() {
  return (
    <div className="app">
      <div className="main-container d-flex flex-row">
        <SideBar />
        <Cars />
      </div>
    </div>
  );
}

export default App;
