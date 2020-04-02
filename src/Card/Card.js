import React from 'react';
import './Card.css';

const Card = ({ id, date,name,number,time}) => {
  return (
    <article className='card'>
      <h3>{ name }</h3>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>Number of guests: { number }</p>
    </article>
  )
}

export default Card;
