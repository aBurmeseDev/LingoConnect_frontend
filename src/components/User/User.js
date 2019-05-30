import React, { Component } from "react";
import { withRouter } from "react-router-dom";


import { Button, Modal } from "react-materialize";

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
  handleDeletePhrase = async id => {
    try {
      const deletePhrase = await fetch(`http://localhost:5000/phrases/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const response = await deletePhrase.json();
      this.setState({
        data: this.state.data.filter(d => d.id !== id)
      })
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
          {/* <h5 style={{ textAlign: "center" }}>Edit Account</h5> */}
          <h5 style={{ textAlign: "center" }}>
            {this.props.currentUser && this.props.currentUser.username}
          </h5>
          <Button type="submit" href="#modal4" className="modal-trigger">
            Edit
          </Button>
          <Modal id="modal4">
            <input
              type="text"
              name="username"
              placeholder="new name"
              autoComplete="off"
              onChange={this.props.handleChange}
            />
            <br />

            <input
              type="password"
              name="password"
              placeholder="new password"
              onChange={this.props.handleChange}
              autoComplete="off"
            />
            <br />

            <Button
              onClick={() => this.props.handleSubmit(this.state)}
              className="modal-close"
            >
              Save
            </Button>
          </Modal>
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
                      <Button key={phrase.id} onClick={() => this.handleDeletePhrase(phrase.id)}style={{ marginBottom: "3rem" }}>
                        Delete Phrase
                      </Button>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <Button onClick={()=> this.props.handleDeleteUser(this.props.currentUser.id)}>Delete account</Button>
      </>
    );
  }
}
export default withRouter(User);
