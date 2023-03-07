/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { Table } from 'react-bootstrap';

// const UserReservationTable = () => {
//   const reservations = [
//     {
//       id: 1,
//       date: '2023-03-10',
//       time: '09:00',
//       carModel: 'Tesla Model S',
//       location: '123 Main St',
//     },
//     {
//       id: 2,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 3,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 4,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 5,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 6,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//   ];
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Car Model</th>
//           <th>Location</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reservations.map((reservation, index) => (
//           <tr key={reservation.id}>
//             <td>{index + 1}</td>
//             <td>{reservation.date}</td>
//             <td>{reservation.time}</td>
//             <td>{reservation.carModel}</td>
//             <td>{reservation.location}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default UserReservationTable;

// ******************************************************************

// import React from 'react';
// import { Table, Button } from 'react-bootstrap';

// const UserReservationTable = ({ onCancel, onAdd, onPostpone }) => {
//   const reservations = [
//     {
//       id: 1,
//       date: '2023-03-10',
//       time: '09:00',
//       carModel: 'Tesla Model S',
//       location: '123 Main St',
//     },
//     {
//       id: 2,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 3,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 4,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 5,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 6,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//   ];
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Car Model</th>
//           <th>Location</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reservations.map((reservation, index) => (
//           <tr key={reservation.id}>
//             <td>{index + 1}</td>
//             <td>{reservation.date}</td>
//             <td>{reservation.time}</td>
//             <td>{reservation.carModel}</td>
//             <td>{reservation.location}</td>
//             <td>
//               <Button variant="danger" onClick={() => onCancel(reservation)}>
//                 Cancel
//               </Button>
//               {' '}
//               <Button variant="primary" onClick={onAdd}>
//                 Add
//               </Button>
//               {' '}
//               <Button variant="warning" onClick={() => onPostpone(reservation)}>
//                 Postpone
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default UserReservationTable;

// ******************************************************************
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Table, Button } from 'react-bootstrap';

// const UserReservationTable = ({ onCancel, onAdd, onPostpone }) => {
//   const reservations = [
//     {
//       id: 1,
//       date: '2023-03-10',
//       time: '09:00',
//       carModel: 'Tesla Model S',
//       location: '123 Main St',
//     },
//     {
//       id: 2,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 3,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 4,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 5,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//     {
//       id: 6,
//       date: '2023-03-12',
//       time: '13:00',
//       carModel: 'Chevrolet Camaro',
//       location: '456 Oak St',
//     },
//   ];
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Car Model</th>
//           <th>Location</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reservations.map((reservation) => (
//           <tr key={reservation.id}>
//             <td>{reservation.id}</td>
//             <td>{reservation.date}</td>
//             <td>{reservation.time}</td>
//             <td>{reservation.carModel}</td>
//             <td>{reservation.location}</td>
//             <td>
//               <Button variant="success" onClick={() => onAdd(reservation)}>
//                 Add
//               </Button>
//               {' '}
//               <Button variant="warning" onClick={() => onPostpone(reservation)}>
//                 Postpone
//               </Button>
//               {' '}
//               <Button variant="danger" onClick={() => onCancel(reservation)}>
//                 Cancel Reservation
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// UserReservationTable.propTypes = {
//   // reservations: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.number.isRequired,
//   //     date: PropTypes.string.isRequired,
//   //     time: PropTypes.string.isRequired,
//   //     carModel: PropTypes.string.isRequired,
//   //     location: PropTypes.string.isRequired,
//   //   }),
//   // ).isRequired,
//   onCancel: PropTypes.func.isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onPostpone: PropTypes.func.isRequired,
// };

// export default UserReservationTable;

// ***************************************************************
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'react-bootstrap';
import './userReservationTable.css';

const UserReservationTable = ({
  // reservations,
  onCancel,
  onAdd,
  onPostpone,
}) => {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const reservations = [
    {
      id: 1,
      date: '2023-03-10',
      time: '09:00',
      carModel: 'Tesla Model S',
      location: '123 Main St',
    },
    {
      id: 2,
      date: '2023-03-12',
      time: '13:00',
      carModel: 'Ford Mushtang',
      location: '456 Oak St',
    },
    {
      id: 3,
      date: '2023-03-12',
      time: '07:00',
      carModel: 'Chevrolet Camaro',
      location: '456 Oak St',
    },
    {
      id: 4,
      date: '2023-03-12',
      time: '10:00',
      carModel: 'Nissan Altimate',
      location: '456 Oak St',
    },
    {
      id: 5,
      date: '2023-03-12',
      time: '03:45',
      carModel: 'Toyota 4Runner',
      location: '456 Oak St',
    },
    {
      id: 6,
      date: '2023-04-12',
      time: '10:00',
      carModel: 'Dodge challenger',
      location: 'AQ6 Lst St',
    },
  ];

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Car Model</th>
            <th>Location</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} onClick={() => handleReservationClick(reservation)}>
              <td>{reservation.id}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.carModel}</td>
              <td>{reservation.location}</td>
              {/* <td></td> */}
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
                  <strong>Date: </strong>
                  {selectedReservation && selectedReservation.date}
                </p>
                <p>
                  <strong>Time: </strong>
                  {selectedReservation && selectedReservation.time}
                </p>
                <p>
                  <strong>Car Model: </strong>
                  {selectedReservation && selectedReservation.carModel}
                </p>
                <p>
                  <strong>Location: </strong>
                  {selectedReservation && selectedReservation.location}
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

// ################################################################
