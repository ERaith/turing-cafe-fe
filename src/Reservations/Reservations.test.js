import React from "react";
import Reservations from "./Reservations";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

let mockReservationData = [];

beforeEach(() => {
  mockReservationData = [
    {
      id: 1,
      date: "4/5",
      name: "Leta",
      number: 12,
      time: "7:00"
    },
    {
      id: 2,
      date: "4/5",
      name: "Mark",
      number: 1,
      time: "7:00"
    }
  ];
});

it("should render when given the right props", () => {
  const { getByText } = render(
    <Reservations reservations={mockReservationData} />
  );

  expect(getByText("Leta")).toBeInTheDocument();
});
