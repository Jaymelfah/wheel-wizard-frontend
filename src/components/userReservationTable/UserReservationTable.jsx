/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'react-bootstrap';
import './userReservationTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservation';

const UserReservationTable = ({
  // reservations,
  onCancel,
  onAdd,
  onPostpone,
}) => {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  // console.log(reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleReservationClick = (reservation) => {
    setSelectedReservation(reservation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedReservation(null);
    setShowModal(false);
  };

  const handleCancelClick = () => {
    onCancel(selectedReservation);
    handleCloseModal();
  };

  const handleAddClick = () => {
    onAdd(selectedReservation);
    handleCloseModal();
  };

  const handlePostponeClick = () => {
    onPostpone(selectedReservation);
    handleCloseModal();
  };

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
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} onClick={() => handleReservationClick(reservation)}>
              <td>{reservation.id}</td>
              <td>{reservation.city}</td>
              <td>{reservation.car_id}</td>
              <td>{reservation.reservation_date}</td>
              <td>{reservation.duration}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  <strong>ID: </strong>
                  {selectedReservation && selectedReservation.id}
                </p>
                <p>
                  <strong>City: </strong>
                  {selectedReservation && selectedReservation.city}
                </p>
                <p>
                  <strong>Car ID: </strong>
                  {selectedReservation && selectedReservation.car_id}
                </p>
                <p>
                  <strong>Date: </strong>
                  {selectedReservation && selectedReservation.reservation_date}
                </p>
                <p>
                  <strong>Time: </strong>
                  {selectedReservation && selectedReservation.duration}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handlePostponeClick}>Postpone </Button>
          <Button variant="success" onClick={handleAddClick}>Add New</Button>
          <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

UserReservationTable.propTypes = {
  // reservations: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     date: PropTypes.string.isRequired,
  //     time: PropTypes.string.isRequired,
  //     carModel: PropTypes.string.isRequired,
  //     location: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onPostpone: PropTypes.func.isRequired,
};

export default UserReservationTable;
