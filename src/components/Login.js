import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    login() {

        alert("name and password")
    }


    render() {
        return (
            <div>
                <input type="text" name="email" value={this.state.email}
                    onChange={(event) => { this.setState({ email: event.target.value }); }} />
                <br></br>
                <input type="password" name="password" value={this.state.password}
                    onChange={(event) => { this.setState({ password: event.target.value }); }} />
                <br></br>
                <button onClick={this.login}>login</button>
                <p>{this.state.email}{this.state.password}</p>

            </div>
        )
    }
}

export default Login
