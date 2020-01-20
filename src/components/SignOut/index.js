import React from 'react';
import { withFirebase } from '../Firebase';
import {Link} from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link style={{color: "white"}} className="nav-link" onClick={firebase.doSignOut}>Sign Out</Link>
);

export default withFirebase(SignOutButton);