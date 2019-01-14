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
      radio_underwater: "",
      marital_status: '',
      stress_reaction:'',
      claustrophobic:'',
      checkbox_disease: {
        cancer: false,
        heart_disease: false,
        diabetes: false
      },
      living_family: {
        siblings: false,
        // siblingsAmount: 0,
        parents: false,
        // parentsAmount: 0,
        grandparents: false,
        // grandparentsAmount: 0,
      },
      education_other: '',
      education: {
        high_school: false,
        associates: false,
        bachelors: false,
        masters: false,
        phd: false,
      },
      essay: '',
      formSubmitted: false,
      formConfirmed: false,
      formEditted: false,
      formSubmittedAgain: false,
      message: '',
      //make a ternery: (only one js file.)
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmittedAgain = this.handleSubmittedAgain.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFollowUpQuestion = this.handleFollowUpQuestion.bind(this);
    this.CreateRange = this.CreateRange.bind(this);
    this.secondPage = this.secondPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
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
    const {name, birthdate, country, diet, radio_underwater, marital_status, stress_reaction, claustrophobic, checkbox_disease, living_family, education, essay} = this.state;


    if (name && birthdate && country && diet && radio_underwater && marital_status && stress_reaction && claustrophobic && checkbox_disease && living_family && education && essay) {
      this.setState ({
        formSubmitted: true,
        message: ''
      })

      return (
        <React.Fragment>
          <input type='submit'value="Submit"/>
        </React.Fragment>
      )

    } else {
      this.setState({
        message: "Please complete the form."
      })
    }
  }


  handleConfirm(event) {

    this.setState({
      formConfirmed: true
    })
  }

  handleEdit(event) {
    event.preventDefault()
    this.setState({
      formEditted: true,
      formSubmitted: false
    })
  }

  handleSubmittedAgain(event){
    event.stopPropagation()
    this.setState({
      formSubmittedAgain:true
    })
  }

  handleRadioChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheckboxChange(event) {
    event.stopPropagation()
    let checkedItems = this.state[event.target.name]
    checkedItems[event.target.id] = event.target.checked
    // console.log(event)
    // debugger
    // console.log('=>', event.target.name , '-->' ,checkedItems)
    this.setState({
      [event.target.name]: checkedItems
    })
  }
  // for checkboxes: value: 'on' or 'off' / checked: 'true' or 'false'

  handleFollowUpQuestion(id) {

    if (this.state.living_family[id]) {
      let range;

      if (id === 'siblings') {
        range = this.CreateRange(0,11)
      } else if (id === 'parents') {
        range = this.CreateRange(0,3)
      } else if (id === 'grandparents') {
        range = this.CreateRange(0,5)
      }
      return(

        <React.Fragment>
          <select name={id + 'Amount'} value={this.state[id + 'Amount']}>
            <option disabled> Siblings </option>
              {range}
            <option> more </option>
          </select>
        </React.Fragment>
      )
    } else {
        return null
    }
  }

  CreateRange(min, max){
    let number = [];
    for (let i = min; i < max; i++) {
      number.push(i);
    }
    return number.map(num => {
      return <option value={num}> {num} </option>
    })
  }



  firstPage(){
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }

  secondPage() {
    return (
      <React.Fragment>
        <form>
          <h1>Review of your responses</h1>
          <ul id='userResponses'>
            <li>Name: {this.state.name}</li>
            <li>Date of Birth: {this.state.birthdate}</li>
            <li>Country of Origin: {this.state.country}</li>
            <li>Dietary preference: {this.state.diet}</li>
            <li>Hold breath underwater: {this.state.radio_underwater}</li>
            <li>Marital status: {this.state.marital_status}</li>
            <li>Stressful situation: {this.state.stress_reaction}</li>
            <li>Claustrophobia: {this.state.claustrophobic}</li>
            <li>Family medical history: {this.state.checkbox_disease.cancer ? "Cancer" : "N/A"}</li>
            <li>Family medical history: {this.state.checkbox_disease.heart_disease ? "Heart Disease" : "N/A"}</li>
            <li>Family medical history: {this.state.checkbox_disease.diabetes ? "Diabetes" : "N/A"}</li>
            <li>Living relatives: {this.state.living_family.siblings ? "Siblings" : 'N/A'}</li>
            <li>Living relatives: {this.state.living_family.parents ? 'Parents' : 'N/A'}</li>
            <li>Living relatives: {this.state.living_family.grandparents ? 'Grandparents' : 'N/A'}</li>
            <li>Educational credentials: {this.state.education.high_school ? 'High School Diploma / G.E.D.' : 'N/A'}</li>
            <li>Educational credentials: {this.state.education.associates ? 'Associates' : 'N/A'}</li>
            <li>Educational credentials: {this.state.education.bachelors ? 'Bachelors' : 'N/A'}</li>
            <li>Educational credentials: {this.state.education.masters ? 'Masters' : 'N/A'}</li>
            <li>Educational credentials: {this.state.education.phd ? 'PhD' : 'N/A'}</li>
            <li>Why you want to explore Mars: {this.state.essay}</li>
          </ul>

          <p id='userSure' >Are you sure the information is correct?</p>

        </form>
      </React.Fragment>
    )
  }



  render() {
    console.log('THIS STATE',this.state);
    // console.log(countries);
    // debugger
    const {formSubmitted, formConfirmed, formSubmittedAgain, message} = this.state;

    if (formSubmitted && !formConfirmed){
      console.log('submitted');
      return (
        <div>
          <h1>Second Page</h1>
          {this.secondPage()}
          <input type='button' onClick={this.handleConfirm} value='Confirm'/>
          <input type='button' onClick={this.handleEdit} value='Edit'/>
          <br/>
        </div>

    )

  } else if (formSubmitted && formConfirmed && !formSubmittedAgain){
      return (
        <React.Fragment>
          <h1>Second Page</h1>
          {this.secondPage()}
          <input type='button' onClick={this.handleConfirm} value='Confirm'/>
          <input type='button' onClick={this.handleEdit} value='Edit'/>
          <input type='button' onClick={this.handleSubmittedAgain} value='Submit' />
        </React.Fragment>
      )
    } else if (formConfirmed && formSubmitted && formSubmittedAgain) {
      return (
        <React.Fragment>
          <p>Thank you, {this.state.name} for your application!</p>
        </React.Fragment>
      )
    } else {
      // console.log('edited', 'or NOT YET submitted');
      return(
        <React.Fragment>
          <h1>Mission to Mars Registration Form</h1>
          <div id='DivEnclosingForm'>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>

              <label>What is your name?</label>
              <input type='text' placeholder='name' name='name' value={this.state.name} id='name'></input>
<br/>
<br/>
              <label htmlFor='birthdate'>What is your date of birth?</label>
              <input
                type='date' id='birthdate' name='birthdate' value={this.state.birthdate} min='1900-01-01' max= '2019-01-31'
                />
<br/>
<br/>
              <label htmlFor='country'>What is your country of origin?</label>
              <select name='country' value={this.state.country}>
                {
                  countries.map(country => {
                    return(<option key={country.code} value={country.name}>{country.name}</option>)
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
              <label htmlFor='radio_underwater'>Can you breathe <strong>underwater</strong> longer than 1 minute? </label> {' '}
<br/>
              <input type='radio' name='radio_underwater' checked={this.state.radio_underwater === 'yes'} onChange={this.handleRadioChange} value='yes' id='yes' />
              <label htmlFor='radio'> Yes </label>

              <input type='radio' name='radio_underwater' checked={this.state.radio_underwater === 'no'} onChange={this.handleRadioChange} value='no' id='no' />
              <label htmlFor='radio'> No </label>

              <input type='radio' name='radio_underwater' checked={this.state.radio_underwater === "i don't know"} onChange={this.handleRadioChange} value="i don't know" id="i don't know"></input>
              <label htmlFor='radio'> I don't know </label>
<br/>
<br/>
              <label htmlFor='marital_status'>What is your marital status? </label> {' '}
<br/>
              <input type='radio' name='marital_status' checked={this.state.marital_status === 'married'} onChange={this.handleRadioChange} value='married' id='married' />
              <label htmlFor='radio'> Married </label>

              <input type='radio' name='marital_status' checked={this.state.marital_status === 'unmarried'} onChange={this.handleRadioChange} value='unmarried' id='unmarried' />
              <label htmlFor='radio'> Unmarried </label>
<br/>
<br/>
              <label htmlFor='stress_reaction'>When you are in a stressful or difficult situation, how do you most frequently react? </label> {' '}
<br/>
              <input type='radio' name='stress_reaction' checked={this.state.stress_reaction === 'determination'} onChange={this.handleRadioChange} value='determination' id='determination' />
              <label htmlFor='radio'> Determination: I continue to confront the situation. </label>

              <input type='radio' name='stress_reaction' checked={this.state.stress_reaction === 'defeat'} onChange={this.handleRadioChange} value='defeat' id='defeat' />
              <label htmlFor='radio'> Defeat: I stop confronting the situation. </label>

              <input type='radio' name='stress_reaction' checked={this.state.stress_reaction === 'anger'} onChange={this.handleRadioChange} value='anger' id='anger' />
              <label htmlFor='radio'> Anger: I become upset at the situation. </label>

              <input type='radio' name='stress_reaction' checked={this.state.stress_reaction === 'resourcefulness'} onChange={this.handleRadioChange} value='resourcefulness' id='resourcefulness' />
              <label htmlFor='radio'> Resourcefulness: I seek help to confront the situation. </label>
<br/>
<br/>
              <label htmlFor='claustrophobic'>Are you <strong>claustrophobic</strong> ? </label> {' '}
<br/>
              <input type='radio' name='claustrophobic' checked={this.state.claustrophobic === 'yes'} onChange={this.handleRadioChange} value='yes' id='yes' />
              <label htmlFor='radio'> Yes </label>

              <input type='radio' name='claustrophobic' checked={this.state.claustrophobic === 'no'} onChange={this.handleRadioChange} value='no' id='no' />
              <label htmlFor='radio'> No </label>

              <input type='radio' name='claustrophobic' checked={this.state.claustrophobic === "i don't know"} onChange={this.handleRadioChange} value="i don't know" id="i don't know"></input>
              <label htmlFor='radio'> I don't know </label>
<br/>
<br/>
              <label htmlFor='checkbox'>Does your family have a history of (check all that apply):</label>

              <input
                type='checkbox'
                name='checkbox_disease'
                checked={this.state.checkbox_disease.cancer}
                onChange={this.handleCheckboxChange}
                id='cancer'>
              </input>
              <label htmlFor='checkbox'> Cancer </label>
              <input
                type='checkbox'
                name='checkbox_disease'
                checked={this.state.checkbox_disease.heart_disease}
                onChange={this.handleCheckboxChange}
                id='heart_disease'>
              </input>
              <label htmlFor='checkbox'> Heart Disease </label>
              <input
                type='checkbox'
                name='checkbox_disease'
                checked={this.state.checkbox_disease.diabetes}
                onChange={this.handleCheckboxChange}
                id='diabetes'>
              </input>
              <label htmlFor='checkbox'> Diabetes </label>
<br/>
<br/>
              <label htmlFor='checkbox'>Do you have any living (check all that apply):</label>

              <input
                type='checkbox'
                name='living_family'
                checked={this.state.living_family.siblings}
                onChange={this.handleCheckboxChange}
                id='siblings'>
              </input>
              <label htmlFor='checkbox'> Siblings </label>

              {this.handleFollowUpQuestion('siblings')}

              <input
                type='checkbox'
                name='living_family'
                checked={this.state.living_family.parents}
                onChange={this.handleCheckboxChange}
                id='parents'>
              </input>
              <label htmlFor='checkbox'> Parents </label>

            {this.handleFollowUpQuestion('parents')}

              <input
                type='checkbox'
                name='living_family'
                checked={this.state.living_family.grandparents}
                onChange={this.handleCheckboxChange}
                id='grandparents'>
              </input>
              <label htmlFor='checkbox'> Grandparents </label>

            {this.handleFollowUpQuestion('grandparents')}
<br/>
<br/>
              <label htmlFor='checkbox'>Check all educational credentials you have received:</label>

              <input
                type='checkbox'
                name='education'
                checked={this.state.education.high_school}
                onChange={this.handleCheckboxChange}
                id='high_school'>
              </input>
              <label htmlFor='checkbox'> High school diploma or GED equivalent </label>

              <input
                type='checkbox'
                name='education'
                checked={this.state.education.associates}
                onChange={this.handleCheckboxChange}
                id='associates'>
              </input>
              <label htmlFor='checkbox'> Associate's Degree </label>

              <input
                type='checkbox'
                name='education'
                checked={this.state.education.bachelors}
                onChange={this.handleCheckboxChange}
                id='bachelors'>
              </input>
              <label htmlFor='checkbox'> Bachelor's Degree </label>

              <input
                type='checkbox'
                name='education'
                checked={this.state.education.masters}
                onChange={this.handleCheckboxChange}
                id='masters'>
              </input>
              <label htmlFor='checkbox'> Master's Degree </label>

              <input
                type='checkbox'
                name='education'
                checked={this.state.education.phd}
                onChange={this.handleCheckboxChange}
                id='phd'>
              </input>
              <label htmlFor='checkbox'> PhD </label>

              <label htmlFor='checkbox'> Other </label>
              <input
                type='text'
                name='education_other'
                onChange={this.handleChange}
                id='other'
                value={this.state.education_other}
                placeholder='Other education'
                >
              </input>
<br/>
<br/>
              <label htmlFor='essay'>Why do you want to be a Mars explorer?</label>
              <textarea rows='100' cols='20' wrap='soft' overflow='scroll' name='essay' value={this.state.essay} id='essay'></textarea>
<br/>
<br/>

              <input type='submit'value="Submit"/>
              {message}

            </form>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Form;
