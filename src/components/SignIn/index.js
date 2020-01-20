import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'  

const SignInPage = () => (
    <div className="pt-5" style={{height: "500px", width: "500px", margin: "auto"}}>
      <div className="pb-5" style={{fontSize: "35px", textAlign: "center"}}>
        <FontAwesomeIcon style={{color: "white"}} className="mr-3" icon={faProductHunt} /><pr style={{color: "#9C27B0", fontsize: "20px"}}>Primer </pr><pr style={{color: "white"}}>Admin</pr>
      </div>
      <SignInForm />
    </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
      this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.VIEWUSERS);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <div className="card shadow-sm" style={{backgroundColor: "#373741"}}>
        <div className="card-body m-4">
        <h4 className="pb-3" style={{color: "white"}}>Sign in</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label style={{color: "white"}}>Email address</label>
              <input
                className="form-control"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group pb-2">
              <label style={{color: "white"}}>Password</label>
              <input
                className="form-control"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <button disabled={isInvalid} 
              className="btn btn-primary" type="submit" style={{width: "100%", backgroundColor: "#9C27B0", borderColor: "#9C27B0"}}>
              Sign In
            </button>
            <div style={{textAlign: "center"}}  className="pt-2">
              {error && <small style={{color: "red"}}>{error.message}</small>}
            </div>
          </form>
          <div className="pt-2">
            <SignUpLink />
          </div>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;
export { SignInForm };