import React, { Component } from "react";

import { Button } from "react-materialize";

class Register extends Component {
  state = {
    username: "",
    email: "",
    primaryLanguage: "",
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
        <h4 style={{ textAlign: "center" }}>Hey!</h4>
        <h6 style={{ textAlign: "center" }}>Welcome to LingoConnect!</h6>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="what do we call you?"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="email please!"
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
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="secure with password!"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Verify Password:
          <input
            type="word"
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
