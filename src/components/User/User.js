import React, { Component } from "react";

import Button from "react-materialize/lib/Button";

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
    console.log(this.props)
    console.log(this.props.currentUser, "user")
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
          <div className="phrases" style={{ height: "100vh" }}>
            <ul>
              {
                this.props.data.map((phrase,i)=>
                  this.props.currentUser.id === Number(phrase.userId) 
                    && <li key={i}>
                          Translated from: {phrase.setLanguage} <br/>
                          Input: {phrase.text} <br/>
                          Translated to: {phrase.transLanguage} <br/>
                          Translation: {phrase.phrase} <br/>
                      </li>  
                  
                )
              }
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
export default User;
