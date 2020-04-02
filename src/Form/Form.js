import React from "react";
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      name:'',
      date:'',
      time:'',
      numberOfGuests:0
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  render () {
    return(
      <form>
        <input
          type = 'text'
          placeholder = 'name'
          value = {this.state.name}
          name = 'name'
          onChange = {this.handleChange}
        />
      </form>
    )
  }
}

export default Form;
