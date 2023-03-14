import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import SignupForm from '../../pages/signup/Signup';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('Sign up form', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
