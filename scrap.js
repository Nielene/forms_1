//==========================
//xavier:
//=============
<select>
	{ages.map(age => (
  	<option value={age}>{age}</option>
  ))}
</select>


<select>
	{ages.map(age => {

    console.log(age)
    let num = 100

    return (<option value={age}>{age + num}</option>)
  })}
</select>

//===================
// my version:
//===================

<label htmlFor='country'>What is your country of origin?</label>
<select name='countries' value={this.state.countries}>
  {
    countries.map(country => {
      console.log(country);
      return(
        <option value={country.name}>{country.name}</option>
      )
    })
  }
</select>

// <select name='countries' value={this.state.countries}>
//   {
//     countries.map(country => {
//       console.log(country);
//       return(
//         <option value={country.name}>{country.name}</option>
//       )
//     })
//
//     // countries.map(country => (
//     //   <option value={country.name}>{country.name}</option>
//     // ))
//   }
// </select>

<br/>
//============================

essay: search: css input text wrap
https://stackoverflow.com/questions/5286663/wrapping-text-inside-input-type-text-element-html-css


//====================
p tags hidden by default:

https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react












//
