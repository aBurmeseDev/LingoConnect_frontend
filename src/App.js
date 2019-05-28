import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as routes from "./components/constants/routes";
import Register from "./components/Register/Register";
import Translate from "./components/Translate/Translate";
import User from "./components/User/User";
// import Login from "./components/Login/Login";

class App extends Component {
  // componentDidMount() {
  //   this.getDogs();
  // }
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
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={routes.REGISTER}
              handleRegister={this.handleRegister}
              render={() => <Register />}
            />
            <Route exact path={routes.TRANSLATE} render={() => <Translate />} />
            <Route exact path={routes.USER} render={() => <User />} />
          </Switch>
        </BrowserRouter>
        {/* <Register handleRegister={this.handleRegister} />
        <Translate />
        <User /> */}
      </div>
    );
  }
}

export default App;
