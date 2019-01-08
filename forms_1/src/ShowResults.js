import React from 'react';
import './showResults.css';

class ShowResults extends React.Component {
  constructor() {
    super();
    this.state = {
      formSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState ({
      formSubmitted: true
    })
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <ul id='userResponses'>
            <li>Name: {this.state.name}</li>
            <li>Date of Birth: {this.state.birthdate}</li>
            <li>Country of Origin: {this.state.country}</li>
            <li>Dietary preference: {this.state.diet}</li>
            <li>Why you want to explore Mars: {this.state.essay}</li>
          </ul>
          <p id='userSure' >Are you sure the information is correct?</p>
          <button type='submit' onClick={this.handleSubmit}>Confirm</button>
        </div>

      </React.Fragment>
    )
  }
}

// export default ShowResults;
