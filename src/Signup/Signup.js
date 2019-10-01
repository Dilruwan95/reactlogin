import React, { Component } from 'react';
import axios from 'axios';


const initialState = {
    Firstname: '',
    Lastname: '',
    Username: '',
    email: '',
    password: '',
    FirstnameError: '',
    LastnameError: '',
    UsernameError: '',
    emailError: '',
    passwordError: ''



}

class Signup extends Component {
    state = initialState

    validate = () => {
        let FirstnameError = '';
        let LastnameError = '';
        let UsernameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.Firstname) {
            FirstnameError = "First name is required";
        }
        if (!this.state.Lastname) {
            LastnameError = "Last name is required";
        }
        if (!this.state.Username) {
            UsernameError = "User name is required";
        }
        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.password || this.state.password.length < 6) {
            passwordError = "password is not valid";
        }


        if (FirstnameError || LastnameError || UsernameError || emailError || passwordError) {
            this.setState({ FirstnameError, LastnameError, UsernameError, emailError, passwordError })
            return false;
        }

        return true;

    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
        axios.post('http://localhost:56139/api/Employee/AddUser', {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Username: this.state.Username,
            email: this.state.email,
            password: this.state.password,
        })
            .then(function (response) {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });


    }


    // test = (){}

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card border-secondary">
                                    <div className="card-header">
                                        <h3 className="mb-0 my-2">Sign Up</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form" role="form" autoComplete="off" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="Firstname">First Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="Firstname"
                                                    placeholder="Firstname"
                                                    onChange={this.handleChange}
                                                    value={this.state.Firstname} required ></input>
                                                {this.state.FirstnameError ? <span style={{ color: "red" }}>{this.state.FirstnameError} </span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Lastname">Last Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="Lastname"
                                                    placeholder="Lastname"
                                                    onChange={this.handleChange}
                                                    value={this.state.Lastname}
                                                    required ></input>
                                                {this.state.LastnameError ? <span style={{ color: "red" }}>{this.state.LastnameError} </span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Username">User Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="Username"
                                                    placeholder="Username"
                                                    onChange={this.handleChange}
                                                    value={this.state.Username}
                                                    required  ></input>
                                                {this.state.UsernameError ? <span style={{ color: "red" }}>{this.state.UsernameError} </span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="email@gmail.com"
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                    required  ></input>
                                                {this.state.emailError ? <span style={{ color: "red" }}>{this.state.emailError} </span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="password"
                                                    title="At least 6 characters with letters and numbers"
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                    required ></input>
                                                {this.state.passwordError ? <span style={{ color: "red" }}>{this.state.passwordError} </span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <button type="submit"
                                                    className="btn btn-success btn-lg float-right"
                                                // onClick = {this.test}
                                                >Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Signup