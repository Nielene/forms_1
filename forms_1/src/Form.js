import React from 'react';
import './Form.css';
const {countries} = require('./countries.js')

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
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    console.log(this.state);
    // console.log(countries);
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
        </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Form;
