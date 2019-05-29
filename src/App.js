import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Footer } from "react-materialize";

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
    showModal: false
  };
  doLogout = async () => {
    await fetch("/login/logout", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({
      currentUser: null
    });
    this.props.history.push(routes.LOGIN);
  };
  handleRegModal = () =>
    this.setState({
      showModal: true
    });
  handleCloseModal = () =>
    this.setState({
      showModal: false
    });

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
      this.setState({
        showModal: false
      });
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
    const { showModal, loginMessage, currentUser } = this.state;
    return (
      <div className="App">
        <main>
          <AppNavBar
            regModal={this.handleRegModal}
            handleLogin={this.handleLogin}
            showModal={showModal}
            closeModal={this.handleCloseModal}
            handleRegister={this.handleRegister}
            loginMessage={loginMessage}
            currentUser={currentUser}
            doLogout={this.doLogout}
          />

          <Switch>
            <Route
              exact
              path={routes.REGISTER}
              render={() =>
                showModal ? <Register onClose={this.handleCloseModal} /> : null
              }
            />
            <Route
              exact
              path={routes.LOGIN}
              handleLogin={this.handleLogin}
              render={() => <Login />}
            />
            <Route exact path={routes.TRANSLATE} render={() => <Translate />} />
            <Route exact path={routes.USER} render={() => <User />} />
          </Switch>
        </main>
        <Footer copyrights="© 2019 Copyright LingoConnect">
          <h5 className="white-text">
            This app is powered by{" "}
            <a href="http://translate.yandex.com/">Yandex.Translate</a>
          </h5>
          <div className="grey-text text-lighten-4">
            SEE PROJECT ON_
            <a
              target="_blank"
              className="grey-text text-lighten-3"
              href="https://github.com/aBurmeseDev/LingoConnect_frontend"
            >
              <i class="fab fa-github fa-2x" />
            </a>
          </div>
        </Footer>
      </div>
    );
  }
}

export default withRouter(App);
