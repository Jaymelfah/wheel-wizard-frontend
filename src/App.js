import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="app">
      <div className="d-flex flex-row">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
