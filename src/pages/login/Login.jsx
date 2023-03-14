import React, { useEffect, useState } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (error === 'AxiosError: Request failed with status code 401') {
      setInvalid(true);
    }
  }, [submitted, error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const reqBody = {
      email,
      password,
    };
    dispatch(login(reqBody));
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
          Login
        </Button>
        { submitted && invalid && <span className="invalid">Invalid Email or password</span> }
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
