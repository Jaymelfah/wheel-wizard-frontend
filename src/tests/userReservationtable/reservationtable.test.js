import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import UserReservationTable from '../../components/userReservationTable/UserReservationTable';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('User reservation table', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <UserReservationTable />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
