import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Register from "./components/Register/Register";
import Translate from "./components/Translate/Translate";
import User from "./components/User/User";
import AppNavBar from "./components/AppNavbar/AppNavbar";
// import Login from "./components/Login/Login";
import * as routes from "./components/constants/routes";

class App extends Component {

  state = { 
    showModal: false
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
      })
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
    return (
      <div className="App">
        <AppNavBar regModal={this.handleRegModal} showModal={this.state.showModal} closeModal={this.handleCloseModal} handleRegister={this.handleRegister}/>
      
          <Switch>
            <Route
              exact
              path={routes.REGISTER}
              
              render={() => this.state.showModal ? (
                <Register onClose={this.handleCloseModal} />
              ) : null}
            />
            <Route exact path={routes.TRANSLATE} render={() => <Translate />} />
            <Route exact path={routes.USER} render={() => <User />} />
          </Switch>
        
        {/* <Register handleRegister={this.handleRegister} />
        <Translate />
        <User /> */}
      </div>
    );
  }
}

export default App;
