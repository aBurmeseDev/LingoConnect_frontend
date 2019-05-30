import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Footer } from "react-materialize";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Translate from "./components/Translate/Translate";
import User from "./components/User/User";
import AppNavBar from "./components/AppNavbar/AppNavbar";

import * as routes from "./components/constants/routes";

class App extends Component {
  state = {
    loginMessage: null,
    registerMessage: null,
    currentUser: {}
  };

  componentDidMount(){
    const current = localStorage.getItem("user")
    const parsedCurrent = JSON.parse(current)
    if (parsedCurrent){
      this.setState({
        currentUser: parsedCurrent,
        logged: true
      })
    }
  }
  handleDeleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const response = await deleteUser.json();
      localStorage.clear()
      this.props.history.push(routes.ROOT);
      this.setState({
        currentUser: {}
      })
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  doLogout = async () => {
    try {
      const logout = await fetch("http://localhost:5000/users/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await logout.json();
      this.props.history.push(routes.ROOT);
      localStorage.clear()
      this.setState({
        currentUser: {},
        logged: response.logged,
        loginMessage: response.message
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      if (response.message === "success") {
        localStorage.setItem("user", JSON.stringify(response.user))
        this.setState({
          currentUser: response.user,
          logged: response.logged
        });
      }

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
      
      if (response.message === "success") {
        localStorage.setItem("user", JSON.stringify(response.user))
        this.setState({
          currentUser: response.user,
          logged: response.logged
        });
      } else {
        this.setState({
          loginMessage: response.message
        });
      }
      console.log(response.user);
      console.log(response.logged, "from the flask server on localhost:5000");
    } catch (err) {
      console.log(err);
    }
  };
  handleSavePhrase = async data => {
    const { currentUser } = this.state;
    console.log(data);
    let obj = {
      userId: currentUser.id,
      text: data.text,
      phrase: data.translation,
      setLanguage: data.setLanguage,
      transLanguage: data.transLanguage
    };
    try {
      const savePhrase = await fetch("http://localhost:5000/phrases/create", {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await savePhrase.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { showModal, loginMessage, currentUser } = this.state;
    return (
      <div className="App">
        <header />
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
            <Route
              exact
              path={routes.TRANSLATE}
              render={() => (
                <Translate
                  currentUser={currentUser}
                  handleSavePhrase={this.handleSavePhrase}
                />
              )}
            />
            <Route
              exact
              path={`${routes.USER}/:id`}
              render={() => <User currentUser={currentUser} handleDeleteUser={this.handleDeleteUser}/>}
            />
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
              className="grey-text text-lighten-3"
              href="https://github.com/aBurmeseDev/LingoConnect_frontend"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
        </Footer>
      </div>
    );
  }
}

export default withRouter(App);
