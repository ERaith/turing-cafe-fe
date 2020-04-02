import React from 'react';
import App from './App';
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";

it('renders without crashing', async () => {
  const {getByPlaceholderText, getByLabelText, getByText,debug } = render(
    <App/>
  );

  const leta = await waitFor(() => getByText("Leta"))
  expect(leta).toBeInTheDocument()

  debug()

});
