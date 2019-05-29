import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        verify_password: ""
    };
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        // add close modal function
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    email:
                    <input type="email" name="email" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    Primary language:
                    <input type="text" name="primaryLanguage" onChange={this.handleChange} />
                    <br />
                {/* Need to make into a drop down options like "en - English" so we can preset the language */}
                </label>
                <label>
                    Password:
                    <input type="text" name="password" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    Verify Password:
                    <input
                        type="text"
                        name="verify_password"
                        onChange={this.handleChange}
                    />
                    <br />
                </label>
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Register;
