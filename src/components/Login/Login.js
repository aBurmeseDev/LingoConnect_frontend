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
        <h4 style={{ textAlign: "center" }}>Login</h4>
        <h6 style={{ textAlign: "center" }}>Welcome back.</h6>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <span>{this.props.loginMessage}</span>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default Login;
