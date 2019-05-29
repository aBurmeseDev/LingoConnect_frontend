import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Translate from "./components/Translate/Translate";
import User from "./components/User/User";
import AppNavBar from "./components/AppNavbar/AppNavbar";

// import Login from "./components/Login/Login";
import * as routes from "./components/constants/routes";

class App extends Component {
  

  state = {
    loginMessage: null,
    registerMessage: null,
    currentUser: null,
  };
  doLogout= async () => {
    await fetch("/login/logout", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      }
    })
    this.setState({
      currentUser: null
    })
    this.props.history.push(routes.LOGIN)
  }

  handleRegister = async data => {
    try {
      const registerCall = await fetch(
        "http://localhost:5000/users/registration",
        {
          method: "POST",
          body: JSON.stringify(data),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const response = await registerCall.json();

      console.log(response, "from the flask server on localhost:5000");
    } catch (err) {
      console.log(err);
    }
  };
  handleLogin = async data => {
    try {
      const loginCall = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await loginCall.json();
      this.setState({
        loginMessage: response.message
      });
      if (response.message === "success") {
        this.setState({
          currentUser: response.user,
          logged: response.logged
        });
      }
      console.log(response.user);
      console.log(response.logged, "from the flask server on localhost:5000");
    } catch (err) {
      console.log(err);
    }
  };
  // getDogs = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/v1/dogs", {
  //       credentials: "include"
  //     });

  //     if (response.ok) {
  //       const responseParsed = await response.json();
  //       console.log(responseParsed);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  render() {
    const {loginMessage, currentUser} = this.state
    return (
      <div className="App">
        <AppNavBar handleLogin={this.handleLogin} handleRegister={this.handleRegister} loginMessage={loginMessage} currentUser={currentUser} doLogout={this.doLogout} />
      
          <Switch>
            <Route
              exact
              path={routes.REGISTER}
              render={() => 
                <Register />}/>
                
            <Route
              exact
              path={routes.LOGIN}
              handleLogin={this.handleLogin}
              render={() => (
                <Login
                />
              )}
            />
            <Route exact path={routes.TRANSLATE} render={() => <Translate currentUser={currentUser} />} />
            <Route exact path={routes.USER} render={() => <User />} />
          </Switch>
        
        {/* <Register handleRegister={this.handleRegister} />
        <Translate />
        <User /> */}
      </div>
    );
  }
}

export default withRouter(App);
