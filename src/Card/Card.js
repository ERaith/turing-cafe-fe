import React from 'react';

const Card = ({ id, date,name,number,time}) => {
  return (
    <section className='card'>
      <h3>{ name }</h3>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>Number of guests: { number }</p>
    </section>
  )
}

export default Card;
