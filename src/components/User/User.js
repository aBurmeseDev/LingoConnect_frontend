import React, { Component } from "react";

import { Button } from "react-materialize";

class User extends Component {
  // componentDidMount() {
  //   this.doGetUser().then(({ user }) => this.setState({ user }));
  // }

  // doGetUser = async () => {
  //   try {
  //     const user = await fetch(`/users/${this.props.match.params.id}`);
  //     const parsedUser = await user.json();
  //     return parsedUser;
  //   } catch (error) {
  //     throw new Error();
  //   }
  // };
  render() {
    // const { username } = this.state.username;
    console.log(this.props);
    console.log(this.props.currentUser, "user");
    return (
      <div>
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
            <ul>
              {this.props.data.map(
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
          </div>
        </main>
      </div>
    );
  }
}
export default User;
