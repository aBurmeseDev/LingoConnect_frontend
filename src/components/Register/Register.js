import React, { Component } from "react";

import { Button } from "react-materialize";
// const modalRoot = document.getElementById("modal-root");

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
        <h6 style={{ textAlign: "center" }}>Welcome new friend!</h6>
        <label>
          username:
          <input
            type="text"
            name="username"
            placeholder="what do we call you?"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            placeholder="actual email!"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Primary language:
          <input
            type="text"
            name="primaryLanguage"
            placeholder="what do you speak?"
            onChange={this.handleChange}
          />
          <br />
          {/* Need to make into a drop down options like "en - English" so we can preset the language */}
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="what's the password?"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Verify Password:
          <input
            type="text"
            name="verify_password"
            placeholder="password, one more time!"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}

export default Register;
