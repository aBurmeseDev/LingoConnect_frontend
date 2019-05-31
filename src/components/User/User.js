import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Button, Modal } from "react-materialize";

class User extends Component {
  state = {
    data: null,
    username: "",
    email: "",
    password: ""
  };
  componentDidMount() {
    this.handleGetPhrase().then(allData => {
      this.setState({
        data: allData
      });
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleEdit(this.state);
  };
  handleEdit = async () => {
    try {
      const editUser = await fetch(
        `http://localhost:5000/users/${this.props.currentUser.id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.state),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const response = await editUser.json();
      this.props.setCurrentUser(response);
      this.setState({
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleGetPhrase = async () => {
    try {
      const getPhrase = await fetch("http://localhost:5000/phrases/create", {
        credentials: "include"
      });
      const response = await getPhrase.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  handleDeletePhrase = async id => {
    try {
      const deletePhrase = await fetch(`http://localhost:5000/phrases/${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      const response = await deletePhrase.json();
      this.setState({
        data: this.state.data.filter(d => d.id !== id)
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data} = this.state;
    const { currentUser } = this.props;
    return (
      <>
        <div className="user-info">
          <h5 style={{ textAlign: "center" }}>
            {currentUser && currentUser.username}
          </h5>
          <h6 style={{ textAlign: "center" }}>
            {currentUser && currentUser.email}
          </h6>
          <h6 style={{ textAlign: "center" }}>
            {currentUser && currentUser.primaryLanguage}
          </h6>
          <Button type="submit" href="#modal4" className="modal-trigger">
            Edit
          </Button>
          <Modal id="modal4">
            <input
              type="text"
              name="username"
              placeholder="new username"
              value={this.props.currentUser.username}
              autoComplete="off"
              onChange={this.handleChange}
            />
            <br />

            <input
              type="password"
              name="password"
              placeholder="new password"
              onChange={this.handleChange}
              autoComplete="off"
            />
            <br />
            <input
              type="email"
              name="email"
              value={this.props.currentUser.email}
              placeholder="new email"
              onChange={this.handleChange}
              autoComplete="off"
            />
            <br />

            <Button
              onClick={() => this.handleEdit(this.state)}
              className="modal-close"
            >
              Save
            </Button>
          </Modal>
        </div>
        <div style={{ paddingTop: "3rem" }} className="row phrases">
          {data && (
            <ul>
              {data.map(
                (phrase, i) =>
                  currentUser.id === Number(phrase.userId) && (
                    <li
                      key={i}
                      className="col s12 m4 l3"
                      style={{
                        textAlign: "center",
                        marginTop: "1rem",
                        paddingLeft: "0.5rem",
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
                      <Button
                        onClick={() => this.handleDeletePhrase(phrase.id)}
                        style={{ marginBottom: "3rem" }}
                      >
                        Delete Phrase
                      </Button>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <Button href="#modal5" className="modal-trigger">
          Delete account
        </Button>
        <Modal id="modal5">
          Before you go....
          <h6 style={{ textAlign: "center" }}> Is it Goodbye?</h6>
          <br />
          <p style={{ textAlign: "center" }}>
            The account will no longer be available, and all data in the account
            will be permanently deleted.
          </p>
          <Button
            onClick={() => this.props.handleDeleteUser(currentUser.id)}
            className="deleteBtn"
          >
            Yes!
          </Button>
          <Button className="modal-close deleteBtn">I will stay</Button>
        </Modal>
      </>
    );
  }
}
export default withRouter(User);
