// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }
//   //   handleChange = e => {
//   //     this.setState({ [e.target.name]: e.target.value });
//   //   };
//   //   handleSubmit = async e => {
//   //     e.preventDefault();
//   //     const loginResponse = await fetch("/users/login", {
//   //       method: "POST",
//   //       credentials: "include",
//   //       body: JSON.stringify(this.state),
//   //       headers: {
//   //         "Content-type": "application/json"
//   //       }
//   //     });

//   render() {
//     console.log(this.state);
//     return (
//       <form onSubmit={this.handleSubmit} className="loginForm">
//         <label
//           htmlFor="username"
//           style={{ color: "rgb(9, 93, 172)", fontSize: "1rem" }}
//         >
//           username
//         </label>
//         <input
//           type="text"
//           name="username"
//           autoComplete="off"
//           onChange={this.handleChange}
//           style={{ color: "#ffffff" }}
//         />
//         <label
//           htmlFor="password"
//           style={{ color: "rgb(9, 93, 172)", fontSize: "1rem" }}
//         >
//           password
//         </label>
//         <input
//           type="password"
//           name="password"
//           onChange={this.handleChange}
//           autoComplete="off"
//           style={{ color: "#ffffff" }}
//         />
//         <br />
//         <button type="submit" className="btn waves-effect waves-light">
//           Login
//         </button>
//       </form>
//     );
//   }
// }

// export default withRouter(Login);
