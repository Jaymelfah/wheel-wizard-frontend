import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqBody = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    dispatch(signup(reqBody));
  };

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success]);

  return (
    <div className="form-cont">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="sidebar-title-signup pt-3 ml-5">WheelWizard</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
        <div className="d-flex account">
          <p>Already have an account? Click here to Log in</p>
          <Button variant="white" type="button" className="btn plain-btn" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
