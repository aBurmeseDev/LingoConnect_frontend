import React, { Component } from "react";
import { Button } from "react-materialize";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h6 style={{ textAlign: "center" }}>Welcome back.</h6>
        <label>
          username:
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <span>{this.props.loginMessage}</span>
        <Button type="submit" className="login">
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
