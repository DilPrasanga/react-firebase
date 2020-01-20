import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons' 

const SignUpPage = () => (
  <div className="pt-5" style={{height: "500px", width: "500px", margin: "auto"}}>
    <div className="pb-5" style={{fontSize: "35px", textAlign: "center"}}>
        <FontAwesomeIcon style={{color: "white"}} className="mr-3" icon={faProductHunt} /><pr style={{color: "#9C27B0", fontsize: "20px"}}>Primer </pr><pr style={{color: "white"}}>Admin</pr>
    </div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.VIEWUSERS);
      })
      .catch(error => {
        this.setState({ error });
        console.log(error);
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div class="card shadow-sm" style={{backgroundColor: "#373741"}}>
        <div className="card-body m-4">
          <h4 className="pb-3" style={{color: "white"}}>Sign up</h4>
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1" style={{color: "white"}}>User Name</label>
              <input
                className="form-control"
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" style={{color: "white"}}>Email Address</label>
              <input
                className="form-control"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" style={{color: "white"}}>Enter Password</label>
              <input
                className="form-control"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group pb-2">
              <label for="exampleInputEmail1" style={{color: "white"}}>Confirm Password</label>
              <input
                className="form-control"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button disabled={isInvalid} 
              className="btn btn-primary" type="submit" style={{width: "100%", backgroundColor: "#9C27B0", borderColor: "#9C27B0"}}>
              Sign Up
            </button>
            <div style={{textAlign: "center"}}  className="pt-2">
              {error && <small style={{color: "red"}}>{error.message}</small>}
            </div>
          </form>
        </div>
      </div>
    );
  };
}

const SignUpLink = () => (
  <p style={{color: "gray", textAlign: "center"}}>
    Don't have an account? <br/> <Link style={{color: "white"}} to={ROUTES.SIGN_UP}>Create New Account</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);
  
export default SignUpPage;
export { SignUpForm, SignUpLink };