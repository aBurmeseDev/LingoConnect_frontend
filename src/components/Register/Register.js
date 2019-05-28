import React, { Component } from "react";
import ReactDOM from "react-dom"

const modalRoot = document.getElementById("modal-root")

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        verify_password: ""
    };
    el = document.createElement("div");
    componentDidMount(){
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        // add close modal function
    };
    render() {
        return ReactDOM.createPortal (
            <div style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.3)"
              }}>
            <div 
                style={{
                    padding: 20,
                    background: "#fff",
                    borderRadius: "2px",
                    display: "inline-block",
                    minHeight: "300px",
                    margin: "1rem",
                    position: "relative",
                    minWidth: "300px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                    justifySelf: "center"
                  }}
            >
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    email:
                    <input type="email" name="email" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    Primary language:
                    <input type="text" name="primaryLanguage" onChange={this.handleChange} />
                    <br />
                {/* Need to make into a drop down options like "en - English" so we can preset the language */}
                </label>
                <label>
                    password:
                    <input type="text" name="password" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    verify_password:
                    <input
                        type="text"
                        name="verify_password"
                        onChange={this.handleChange}
                    />
                    <br />
                </label>
                <button type="submit">Register</button>
            </form>
            </div>
            </div>,
            this.el
        );
    }
}

export default Register;
