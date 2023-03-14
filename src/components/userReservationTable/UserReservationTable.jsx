import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './userReservationTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../redux/reservations/reservation';
import { getCars } from '../../redux/cars/cars';
import date from '../../assets/date.png';
import city from '../../assets/city.png';
import car from '../../assets/car.png';
import del from '../../assets/del.png';
import time from '../../assets/time.png';

const UserReservationTable = () => {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const carsData = useSelector((state) => state.cars);
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

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

  const handleCancelClick = (id) => {
    dispatch(deleteReservation(id));
    handleCloseModal();
    dispatch(fetchReservations());
  };

  return (
    <div className="tablecont">
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Car
              {' '}
              <img src={car} alt="date" className="table-img" />
            </th>
            <th>
              City
              {' '}
              <img src={city} alt="city" className="table-img" />
            </th>
            <th>
              Date
              {' '}
              <img src={date} alt="date" className="table-img" />
            </th>
            <th>
              Duration
              {' '}
              <img src={time} alt="time" className="table-img" />
            </th>
            <th>
              Delete
              {' '}
              <img src={del} alt="delete" className="table-img" />
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => {
            const car = cars.find((car) => car.id === reservation.car_id);
            const carName = car ? car.car_name : 'Unknown Car';
            return (
              <tr key={reservation.id} onClick={() => handleReservationClick(reservation)}>
                <td>{reservation.id}</td>
                <td>{carName}</td>
                <td>{reservation.city}</td>
                <td>{reservation.reservation_date}</td>
                <td>
                  {reservation.duration}
                  {' '}
                  hrs
                </td>
                <td><Button className="table-btn" variant="danger" onClick={() => handleCancelClick(reservation.id)}>Cancel Reservation</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserReservationTable;
