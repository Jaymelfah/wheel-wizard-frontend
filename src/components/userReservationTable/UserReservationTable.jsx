/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import './userReservationTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../redux/reservations/reservation';
import { getCars } from '../../redux/cars/cars';

const UserReservationTable = () => {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const carsData = useSelector((state) => state.cars);
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  // console.log(reservations);

  const cars = carsData.map((car) => ({
    id: car.id,
    car_name: car.name,
  }));

  useEffect(() => {
    dispatch(getCars());
    dispatch(fetchReservations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [selectedReservation, dispatch]);

  const handleReservationClick = (reservation) => {
    setSelectedReservation(reservation);
  };

  const handleCloseModal = () => {
    setSelectedReservation(null);
  };

  const handleCancelClick = async (id) => {
    await dispatch(deleteReservation(id));
    handleCloseModal();
    dispatch(fetchReservations());
  };

  // const handlePostponeClick = () => {
  //   onPostpone(selectedReservation);
  //   handleCloseModal();
  // };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Car_ID</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Delete</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => {
            const car = cars.find((car) => car.id === reservation.car_id);
            const carName = car ? car.car_name : 'Unknown Car';
            return (
              <tr key={reservation.id} onClick={() => handleReservationClick(reservation)}>
                <td>{reservation.id}</td>
                <td>{reservation.city}</td>
                <td>{carName}</td>
                <td>{reservation.reservation_date}</td>
                <td>{reservation.duration}</td>
                <td><Button variant="danger" onClick={() => handleCancelClick(reservation.id)}>Cancel Reservation</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </>
  );
};

export default UserReservationTable;
