import React, { Component } from "react";
import axios from "axios";
import './NewBeer.css';

export default class NewBeer extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      tagline:'',
      description:'',
      first_brewed:'',
      brewers_tips:'',
      attenuation_level:0,
      contributed_by:''

    }
  }

  handleChange = (event) =>{
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {

    event.preventDefault();

    let {name, tagline, contributed_by} = this.state

    console.log(this.state);

    axios.post(`http://localhost:5000/new`, { name, tagline, contributed_by  })
    .then( () => {
      this.setState({title: "", });
    })
    .catch( error => console.log(error) )
  }

  FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <form controlId={id}>
        <label>{label}</label>
        <input {...props} />
      </form>
    );
  };

  render() {
    return (
      <div className='form-section'>
        <form onSubmit={this.handleFormSubmit}>
          <input 
          id="formControlsName" 
          type="text" 
          label="Name" 
          onChange={e => this.handleChange(e)}
          name='name'
          />
          <input
            id="formControlsTagline"
            type="text"
            label="Tagline"
            onChange={e => this.handleChange(e)}
            name='tagline'
          />
          <input
            id="formControlsTagline"
            type="text"
            label="Contributed By"
            onChange={e => this.handleChange(e)}
            name='contributed_by'
          />
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    );
  }
}