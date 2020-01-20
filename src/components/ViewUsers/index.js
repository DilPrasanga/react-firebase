import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons' 

class ViewUsers extends Component {
    state = {  }

    render() { 
        return ( 
        <div className="container pt-5">
            <div className="row">
                <div className="col-sm-5" style={{color: "white"}}><h5>Account Management</h5></div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-7">
                            <div class="input-group">
                                <input type="text" className="form-control" placeholder="Search by name or email" aria-describedby="search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="button">
                                        <FontAwesomeIcon style={{color: "White"}} className="mr-1" icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <button className="btn btn-primary" style={{backgroundColor: "#9C27B0", borderColor: "#9C27B0", borderRadius: "25px"}} type="button">
                                + Add New Account
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-100"></div>
                <div className="col pt-5">
                    <table className="table table-hover">
                        <thead style={{color: "white", backgroundColor: "#373741"}}>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default ViewUsers;