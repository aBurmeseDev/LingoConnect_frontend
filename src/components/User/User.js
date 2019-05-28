import React, { Component } from "react";

class User extends Component {
  state = {
    user: {
      username: "",
      primaryLang: ""
    }
  };
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
    return (
      <div>
        <h1>user page</h1>
        {/* <h1>{username}</h1> */}
      </div>
    );
  }
}
export default User;
