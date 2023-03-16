import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './userReservationTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchReservations, deleteReservation } from '../../redux/reservations/reservation';
import { getCars } from '../../redux/cars/cars';
import date from '../../assets/date.png';
import city from '../../assets/city.png';
import car from '../../assets/car.png';
import del from '../../assets/del.png';
import time from '../../assets/time.png';
import loader from '../../assets/loader2.gif';
import loaders from '../../assets/loader.gif';

const UserReservationTable = () => {
  const carsData = useSelector((state) => state.cars);
  const { reservations, loading, error } = useSelector((state) => state.reservations);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const cars = carsData.map((car) => ({
    id: car.id,
    car_name: car.name,
  }));

  useEffect(() => {
    dispatch(getCars());
    dispatch(fetchReservations());
  }, []);

  const handleCancelClick = (id) => {
    setIsLoading(true);
    dispatch(deleteReservation(id)).then(() => {
      toast.info('Reservation deleted');
      dispatch(fetchReservations());
      setIsLoading(false);
    });
  };

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="center"><img className="loading-cars" src={loaders} alt="loading" /></div>);
  }

  if (error) {
    return <div>{error}</div>;
  }

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
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{carName}</td>
                <td>{reservation.city}</td>
                <td>{reservation.reservation_date}</td>
                <td>
                  {reservation.duration}
                  {' '}
                  hrs
                </td>
                <td><Button className="table-btn" variant="danger" onClick={() => handleCancelClick(reservation.id)}>{isLoading ? <img src={loader} alt="loading" className="spinner" /> : 'Cancel Reservation'}</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserReservationTable;
