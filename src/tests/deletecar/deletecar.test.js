import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import RemoveCar from '../../components/deleteCar/deletecar';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('Deletecar', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <RemoveCar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
