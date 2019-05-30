import React, { Component } from "react";

import { Button } from "react-materialize";

class User extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    this.handleGetPhrase().then(allData => {
      this.setState({
        data: allData
      });
    });
  }
  handleGetPhrase = async () => {
    try {
      const getPhrase = await fetch("http://localhost:5000/phrases/create", {
        credentials: "include"
      });
      const response = await getPhrase.json();
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
    }
  };
  
  render() {
    const { data } = this.state
    return (
      <>
        <main>
          <div className="user-info">
            <h5 style={{ textAlign: "center" }}>Edit Account</h5>
            <h6 style={{ textAlign: "center" }}>
              username:{" "}
              {this.props.currentUser && this.props.currentUser.username}
            </h6>
            <Button>Edit name</Button> <Button>Delete account</Button>
            <h6 style={{ textAlign: "center" }}>password:</h6>
            <Button>Edit password</Button>
          </div>
          <div style={{ height: "80vh", paddingTop: "3rem" }}>
            {
              data
              &&
            <ul>
              {data.map(
                (phrase, i) =>
                  this.props.currentUser.id === Number(phrase.userId) && (
                    <li
                      key={i}
                      style={{ textAlign: "center", paddingTop: "0.75rem" }}
                    >
                      Translated from: {phrase.setLanguage.toUpperCase()} <br />
                      Input: {phrase.text} <br />
                      Translated to: {phrase.transLanguage.toUpperCase()} <br />
                      Translation: {phrase.phrase} <br />
                    </li>
                  )
              )}
            </ul>
            }
          </div>
        </main>
      </>
    );
  }
}
export default User;
