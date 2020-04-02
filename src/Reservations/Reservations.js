import React from "react";
import Card from "../Card/Card";
import './Reservations.css';

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
    <section>
      {reservationCards}
    </section>
  );
};

export default Reservations;
