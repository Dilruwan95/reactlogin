import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
    state = {
        email: '',
        password: '',
        usaername:'',
        emailError: '',
        UsernameError: '',
        passwordError: '',
        LoginSucess: false,

    }
    

    validate = () => {
        let UsernameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.Username) {
            UsernameError = "User name is required";
        }
        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.password || this.state.password.length < 6) {
            passwordError = "password is not valid";
        }


        if (UsernameError || emailError || passwordError) {
            this.setState({ UsernameError, emailError, passwordError })
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
        this.setState({LoginSucess:false})
        var that = this;

       // console.log(this.state.Username);
      //console.log(this.state.password);

         axios.post('http://localhost:56139/api/Employee/authenticate', {
            Username: this.state.Username,
            password: this.state.password,
        })
            .then(function (response) {
                console.log(response)
                localStorage.setItem('token',response.data)
                that.setState({LoginSucess:true})

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    

    render() {
          
        if(this.state.LoginSucess === true){
            return <Redirect to='/Emplist' />
        }
        

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
                                        <form onSubmit={this.handleSubmit} >
                                            <div className="form-group">
                                                <label htmlFor="Username">Usaer name :</label>
                                                <input type="text" className="form-control"
                                                    id="Username"
                                                    placeholder="Enter your User name" onChange={this.handleChange} />
                                                {this.state.UsernameError ? <span style={{ color: "red" }}>{this.state.UsernameError} </span> : ''}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Password :</label>
                                                <input type="password" className="form-control"
                                                    id="password" placeholder="Enter your password" onChange={this.handleChange} />
                                                {this.state.passwordError ? <span style={{ color: "red" }}>{this.state.passwordError} </span> : ''}
                                            </div>

                                            <div className="form-group form-check">
                                                <label className="form-check-label" htmlFor="exampleCheck1">
                                                    <input type="checkbox" className="form-check-input"
                                                        id="exampleCheck1" />Remember me
                  </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary"  >Sign In</button>
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
export default Signin