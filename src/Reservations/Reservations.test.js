import React from 'react';
import Resrvations from './Resrvations';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


beforeEach(() => {

});

it('should render when given the right props', () => {
  // we need to mock removeIdea
    const {getByText} = render(
      <Reservations
      id={1}
      date={'4/5'}
      name={'Leta'}
      number={12}
      time={"7:00"}
      />
    )

    expect(getByText('Leta')).toBeInTheDocument();
});
