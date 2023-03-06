import GET_CARS from '../types';
import getCarsFromDB from '../../APIs/cars';

const initialState = [];

export const getCars = () => async (dispatch) => {
  const cars = await getCarsFromDB();
  dispatch({
    type: GET_CARS,
    payload: cars,
  });
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return action.payload;

    default:
      return state;
  }
};
