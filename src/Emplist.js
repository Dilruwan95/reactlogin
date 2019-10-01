import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



class Emplist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: []
        };
    }




    componentDidMount() {
        console.log("token + " + localStorage.getItem('token'));
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        axios.get('http://localhost:56139/api/Employee/getAll', { headers: { Authorization: AuthStr } })
            .then((response) => {
                //handle success
                console.log(response);
                this.setState({ res: response.data });


            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    render() {

        if (localStorage.getItem('token') != null) {
            return (
                <div>
                    <div style={{ marginTop: 40, marginLeft: 400, marginRight: 400, }}>
                        <h3>Registered     Employees</h3>
                        <br />
                        {
                            this.state.res.map((student, _index) => {
                                const { id, firstname, lastname } = student
                                return (
                                    <div style={{ marginTop: 10 }}>
                                        <table className="table table-dark">
                                            <tbody>
                                                <tr key={id} >
                                                    <td style={{ textAlign: "left" }}>{firstname} {lastname}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return <Redirect to='/' />
        }
    }
}

export default Emplist