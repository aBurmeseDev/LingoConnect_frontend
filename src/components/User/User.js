import React, { Component } from "react";

import { Button } from "react-materialize";

class User extends Component {
  state = {
    data: null
  };
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
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="user-info">
          <h5 style={{ textAlign: "center" }}>Edit Account</h5>
          <h6 style={{ textAlign: "center" }}>
            username:{" "}
            {this.props.currentUser && this.props.currentUser.username}
          </h6>
          <Button>Edit name</Button>
          <h6 style={{ textAlign: "center" }}>password:</h6>
          <Button>Edit password</Button>
        </div>
        <div style={{ paddingTop: "3rem" }} className="row">
          {data && (
            <ul>
              {data.map(
                (phrase, i) =>
                  this.props.currentUser.id === Number(phrase.userId) && (
                    <li
                      key={i}
                      className="col m{i}"
                      style={{
                        textAlign: "center",
                        marginTop: "1rem",
                        paddingLeft: "0.5rem",
                        marginTop: "0.95rem",
                        marginLeft: "0.75rem",
                        borderRight: "2px dotted black"
                      }}
                    >
                      <p>Translated from: {phrase.setLanguage.toUpperCase()}</p>{" "}
                      <h6 style={{ fontWeight: "700" }}>{phrase.text}</h6>
                      <p>
                        Translated to: {phrase.transLanguage.toUpperCase()}
                      </p>{" "}
                      <h5 style={{ fontWeight: "700" }}>{phrase.phrase}</h5>{" "}
                      <br />
                      <Button style={{ marginBottom: "3rem" }}>
                        Delete Phrase
                      </Button>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <Button>Delete account</Button>
      </>
    );
  }
}
export default User;
