import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import ReservationForm from '../../components/reservationForm/ReservationForm';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('Reservations', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <ReservationForm />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
