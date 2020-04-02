import React, { Component } from "react";
import "./App.css";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.error(err.message));
  }



  makeNewReservation = newReservationData => {
    let updatedReservation;
    newReservationData.number = parseInt(newReservationData.number)
    fetch('http://localhost:3001/api/v1/reservations',{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name:newReservationData.name,
        date:newReservationData.date,
        time: newReservationData.time,
        number:newReservationData.number
      })
    })
    .then(res => res.json())
    .then(data => {

      newReservationData.id = data.id;

    })
    .then(this.setState({...this.state.reservations,newReservationData}) )

  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form makeNewReservation={this.makeNewReservation} />
        </div>
        <div className="resy-container">
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
