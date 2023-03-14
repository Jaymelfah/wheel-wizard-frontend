import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import Modal from '../../components/detailsPage/detailsmodal';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'mock data' })),
}));

describe('Modal', () => {
  it('renders correctly', () => {
    const selectedCar = {
      id: 1,
      name: 'Car 1',
    };
    const setIsModalOpen = jest.fn();
    const { container } = render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Modal selectedCar={selectedCar} setIsModalOpen={setIsModalOpen} />
          ,
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
