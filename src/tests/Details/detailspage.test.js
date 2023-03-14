/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import DetailsPage from '../../components/detailsPage/DetailsPage';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('Details View', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <DetailsPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
