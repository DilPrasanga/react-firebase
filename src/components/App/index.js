import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.LANDING} component={SignInPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    </div>
  </Router>
);
 
export default withAuthentication(App);