// Login form with design

import React from "react";
import { MDBRow,MDBIcon, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class FormsPage extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="form" style={{paddingLeft:"345px"}}>
          <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                required
              >
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='user'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                required
              >
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='envelope-open'
                value={this.state.email}
                onChange={this.changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Email address'
              >
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='city'
                value={this.state.city}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='City'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='map-marked-alt'
                value={this.state.state}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='State'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='location-arrow'
                value={this.state.zip}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='zip'
                label='Zip'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid zip.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          {/* <MDBRow>
            <MDBInput style={{marginLeft:"-115px", marginTop:"15px"}}
              type='checkbox'
              value='conditions'
              id='materialInvalidCheck'
              required
              label='Agree to terms and conditions'
            >
              <div className='invalid-feedback'>
                     You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow> */}
          {/* <MDBBtn color='primary' type='submit'>
            Submit Form
          </MDBBtn> */}
          <div style={{paddingLeft:"55px"}}>
          <MDBBtn outline color="black">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
        </form>
      </div>
    );
  }
}

export default FormsPage;
