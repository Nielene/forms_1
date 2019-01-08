import React from 'react';
const {countries} = require('./countries.js')

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      birthdate: '',
      country_of_origin: '',
      dietary_preference: '',
      essay: ''
    }
    this.handleChange = this.handleChange.bind(this);
// debugger
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // debugger
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
            <select name='countries' value={this.state.countries}>

              {
                // countries.forEach(name => (
                //   console.log(country);
                // ))}


                countries.map(country => {
                  console.log(country);
                return(<option value={country.name}>{country.name}</option>)

            })
              }

            </select>
            <br/>
            <br/>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Form;
