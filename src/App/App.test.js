import React from 'react';
import App from './App';
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";

it('renders all the cards', async () => {
  const {getByPlaceholderText, getByLabelText, getByText,debug } = render(
    <App/>
  );
  const leta = await waitFor(() => getByText("Leta"))
  expect(leta).toBeInTheDocument()

});

it('should let a user add a new reservation', async () => {
  const {getByPlaceholderText, getByLabelText, getByText,debug } = render(
    <App/>
  );

  let input = getByPlaceholderText('name')
  fireEvent.change(input,{target:{value:'Erik'}})

  let date = getByPlaceholderText('date')
  fireEvent.change(date,{target:{value:'4444-02-03'}})

  let time = getByPlaceholderText('time')
  fireEvent.change(time,{target:{value:"14:02"}})

  let numberOfGuests = getByPlaceholderText('Number of Guests')
  fireEvent.change(numberOfGuests,{target:{value:1}})

  let submit = getByLabelText('Submit Reservation')
  fireEvent.click(submit);

  let erik = await waitFor(() => getByText('Erik'))
  expect(erik).toBeInTheDocument();

});
