import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import SignInPage from '../SignIn';

const Navigation = ({ authUser }) => (
    <div>
      <NavigationDef />
    </div>
);

const NavigationDef = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <Link className="navbar-brand" to={ROUTES.LANDING}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <AuthUserContext.Consumer>
        {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
      </AuthUserContext.Consumer>
    </div>
  </nav>
);

const NavigationAuth = () => (
  <ul className="navbar-nav">
        <li className="nav-item active pt-2 pr-2">
          <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        <li className="nav-item pt-2 pr-2">
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className="nav-item pt-1">
          <SignOutButton />
        </li>
  </ul>
);

const NavigationNonAuth = () => (
    <ul className="navbar-nav">
      <li className="nav-item active pr-2">
        <Link to={ROUTES.LANDING}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
);
 
export default Navigation;