import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="app">
      {!isAuthenticated ? (
        <UnAuthenticatedRoute />
      ) : (
        <AuthenticatedRoute />
      )}
    </div>
  );
}

export default App;
