import React, { Component } from 'react';

class CreateUser extends Component {
    state = { 
        permissions: [
            {name: "Plan Management", cId: "1", eId: "2", dId: "3"},
            {name: "Post Management", cId: "4", eId: "5", dId: "6"},
            {name: "Community Management", cId: "7", eId: "8", dId: "9"},
            {name: "Store Management", cId: "10", eId: "11", dId: "12"}
        ]
     }

    render() { 
        return ( 
        <div className="container pt-5" style={{color: "white"}}>
            <div style={{color: "white"}}><h5>Create Account</h5></div>
            <form className="pt-4">
                <div class="form-group">
                    <label for="inputUserName">User Name</label>
                    <input className="form-control" type="text" id="inputUserName" placeholder="User Name" style={{width: "50%"}}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputLastName">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" style={{width: "50%"}}/>
                </div>
                <div className="form-group">
                    <label for="inputAccount">Account Type</label>
                    <select id="inputAccount" className="form-control" style={{width: "50%"}}>
                        <option selected>Choose...</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Enter password"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputRePassword">Confirm Password</label>
                        <input type="password" className="form-control" id="inputRePassword" placeholder="Re-enter password"/>
                    </div>
                </div>
                <div style={{color: "white"}} className="mt-3"><h6>Permissions</h6></div>
                <div className="border rounded " style={{background: "#292931", border: "#373741"}}>
                <table className="table table-hover">
                        <thead style={{color: "white", backgroundColor: "#373741"}}>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Create</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.permissions.map(permission => (
                                <tr>
                                <th scope="row" style={{color: "white"}}>{permission.name}</th>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" id={permission.cId} type="checkbox"/>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" id={permission.dId} type="checkbox"/>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" id={permission.eId} type="checkbox"/>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{float: "right"}} className="pt-3">
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#9C27B0", borderColor: "#9C27B0"}}>Save User</button>
                </div>
            </form>
        </div> 
        );
    }
}
 
export default CreateUser;