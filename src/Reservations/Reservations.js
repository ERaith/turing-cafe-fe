import React from "react";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return <Card
      id={reservation.id}
      date={reservation.date}
      name={reservation.name}
      number={reservation.number}
      time={reservation.time}
      key = {reservation.id}
    />;
  });

  return (
    <>
      <h2> Reservations go here!!!</h2>
      {reservationCards}
    </>
  );
};

export default Reservations;
