import React, { Component } from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

class Session extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <h1>Session</h1>
        </div> 
        );
    }
}
 
export default Session;
export { AuthUserContext, withAuthentication, withAuthorization };