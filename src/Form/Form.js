import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0,
      id:0,
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  resetInputs = () => {
    this.setState({ name: "", date: "", time: "", number: 0, id: "" });
  };
  submitReservation = event => {
    event.preventDefault();
    let newReservationData = { ...this.state };
    this.props.makeNewReservation(newReservationData);
    this.resetInputs();
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="date"
          placeholder="date"
          value={this.state.date}
          name="date"
          onChange={this.handleChange}
        />
        <input
          type="time"
          placeholder="time"
          value={this.state.time}
          name="time"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Number of Guests"
          value={this.state.number}
          name="number"
          onChange={this.handleChange}
        />
        <button aria-label = 'Submit Reservation' onClick={this.submitReservation}> Make Reservation</button>
      </form>
    );
  }
}

export default Form;
