import React, { useState } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import loader from '../../assets/loader2.gif';

import { login } from '../../redux/auth/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const reqBody = {
      email,
      password,
    };
    await dispatch(login(reqBody));
    setIsLoading(false);
  };

  return (
    <div className="form-cont">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="sidebar-title-signup pt-3 ml-5">WheelWizard</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLoading ? <img src={loader} alt="loading" className="spinner" /> : 'Login'}
        </Button>
        <div className="d-flex account">
          <p>No account yet? Click here to Sign Up</p>
          <Button variant="white" type="button" className="btn plain-btn" onClick={() => navigate('/signup')}>
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
