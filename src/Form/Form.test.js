import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


it("should render when given the right props", () => {

  let mockSubmitReservation = jest.fn()
  const {getByPlaceholderText, getByLabelText, debug } = render(
    <Form makeNewReservation={mockSubmitReservation} />
  );
  let input = getByPlaceholderText('name')
  fireEvent.change(input,{target:{value:'Erik'}})
  expect(input.value).toBe('Erik');
  let date = getByPlaceholderText('date')
  fireEvent.change(date,{target:{value:'4444-02-03'}})
  expect(date.value).toBe('4444-02-03');
  let time = getByPlaceholderText('time')
  fireEvent.change(time,{target:{value:"14:02"}})
  expect(time.value).toBe("14:02");
  let numberOfGuests = getByPlaceholderText('Number of Guests')
  fireEvent.change(numberOfGuests,{target:{value:1}})
  expect(numberOfGuests.value).toBe('1');

  let submit = getByLabelText('Submit Reservation')
  fireEvent.click(submit);
  expect(mockSubmitReservation).toBeCalledTimes(1)

});
