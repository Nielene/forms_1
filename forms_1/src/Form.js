import React from 'react';
import './Form.css';
const {countries} = require('./countries.js')

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ShowResults from './ShowResults.js'
// ReactDOM.render(<ShowResults />, document.getElementById('root'));

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      birthdate: '',
      country: 'Afghanistan',
      diet: 'omnivore',
      essay: '',
      formCompleted: false,
      formConfirmed: false,
      //make a ternery: (only one js file.)
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
// debugger
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // debugger
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      formCompleted: true
    })
  }

  handleConfirm(event) {
    event.preventDefault()
    this.setState({
      formConfirmed: true
    })
  }

  render() {
    console.log(this.state);
    console.log(countries);
    // debugger

    if(!this.state.formConfirmed){
      return(
        <React.Fragment>
          <h1>Mission to Mars Registration Form</h1>
          <div>
            <form onChange={this.handleChange}>
              <br />
              <br />
              <label>What is your name?</label>
              <input type='text' placeholder='name' name='name' value={this.state.name} id='name'></input>
              <br/>
              <br/>
              <label htmlFor='birthdate'>What is your date of birth?</label>
              <input
                type='date' id='birthdate' name='birthdate' value={this.state.birthdate} min='1900-01-01' max= '2019-01-08'
                />
              <br/>
              <br/>
              <label htmlFor='country'>What is your country of origin?</label>

              <select name='country' value={this.state.country}>
                {
                  countries.map(country => {
                    // console.log(country);
                    return(
                      <option value={country.name}>{country.name}</option>
                    )
                  })
                }
              </select>
              <br/>
              <br/>
              <label htmlFor='diet'>What is your dietary preference?</label>
              <select name='diet' value={this.state.diet}>
                <option value="omnivore">omnivore</option>
                <option value="vegetarian">vegetarian</option>
                <option value="vegan">vegan</option>
              </select>
              <br/>
              <br/>
              <label htmlFor='essay'>Why do you want to be a Mars explorer?</label>
              <textarea rows='100' cols='20' wrap='soft' overflow='scroll' name='essay' value={this.state.essay} id='essay'></textarea>
              <br/>
              <br/>
              <button type='submit' onClick={this.handleSubmit}>Submit</button>
              <br/>
              {this.state.formCompleted ? <div>
                  <ul id='userResponses'>
                  <li>Name: {this.state.name}</li>
                  <li>Date of Birth: {this.state.birthdate}</li>
                  <li>Country of Origin: {this.state.country}</li>
                  <li>Dietary preference: {this.state.diet}</li>
                  <li>Why you want to explore Mars: {this.state.essay}</li>
                </ul>

                <p id='userSure' >Are you sure the information is correct?</p>
                <button type='submit' onClick={this.handleConfirm}>Confirm</button>
                <br/>

              </div>  : ""}

            </form>

          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
            <p>Thank you for your application!</p>
        </React.Fragment>
      )
    }

  }
}

export default Form;
