import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons' 

import {Route} from 'react-router-dom';
import CreateUser from '../CreateUser';
import ViewUsers from '../ViewUsers';

class AccountPage extends Component {
    state = {  }
    
    constructor(props) {
        super(props);
        this.state = {
            bgColor1: "#373741",
            bgColor2: "#373741"
        }
    }

    componentDidMount() {
        this.viewUsers();
    }

    newUser = (e) => {
        this.setState({
            bgColor1: "#292931",
            bgColor2: "#373741"
        })
        this.props.history.push(ROUTES.CREATEUSER);
    };

    viewUsers = (e) => {
        this.setState({
            bgColor1: "#373741",
            bgColor2: "#292931"
        })
        this.props.history.push(ROUTES.VIEWUSERS);
    }

    render() { 
        return (
        <div className="row">
            <div className="col-md-2">
                <div className=" pt-4" style={{backgroundColor: "#373741", height: "120vh"}}>
                    <div className="pl-3" style={{fontSize: "25px"}}>
                        <FontAwesomeIcon style={{color: "#9C27B0"}} className="mr-1" icon={faProductHunt} /><pr style={{color: "white", fontsize: "20px"}}>Primer </pr><pr style={{color: "white"}}>Admin</pr>
                    </div>
                    <hr style={{background: "gray"}}/>
                    <ul class="nav nav-pills flex-column" >
                        <li className="nav-item pt-2 pr-2">
                            <button type="submit" style={{backgroundColor: this.state.bgColor2, width:"100%", borderColor: "transparent", textAlign:"left"}} className="btn btn-primary" onClick={this.viewUsers}>View Users</button>
                        </li>
                        <li className="nav-item active pt-2 pr-2">
                            <button type="submit" style={{backgroundColor: this.state.bgColor1, width:"100%", borderColor: "transparent", textAlign:"left"}} className="btn btn-primary" onClick={this.newUser}>Add New User</button>
                        </li>
                        <li className="nav-item pt-2">
                            <SignOutButton />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10">
                <Route path={ROUTES.CREATEUSER} component={CreateUser} />
                <Route exact path={ROUTES.VIEWUSERS} component={ViewUsers} />       
            </div>
        </div>
        );
    }
}
 
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);