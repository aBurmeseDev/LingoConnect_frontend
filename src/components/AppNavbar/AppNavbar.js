import React from "react";
// import * as routes from "../constants/routes";
import { Navbar, NavItem, Modal } from "react-materialize";
import Login from "../Login/Login";
import Register from "../Register/Register";

const AppNavbar = ({
  handleRegister,
  currentUser,
  handleLogin,
  loginMessage,
  doLogout
}) => (
  <Navbar alignLinks="right">
    {currentUser
      ? [
          <NavItem key={3} href="/user">
            Account
          </NavItem>,
          <NavItem key={4} onClick={doLogout}>
            Logout
          </NavItem>
        ]
      : [
          <div key={1} href="#modal1" className="modal-trigger">
            Login
          </div>,
          <Modal id="modal1" header="" key={2}>
            <Login
              handleLogin={handleLogin}
              loginMessage={loginMessage}
              currentUser={currentUser}
              key={5}
            />
          </Modal>,
          <NavItem key={6}>
            <div href="#modal2" className="modal-trigger" key={8}>
              Register
            </div>
            <Modal id="modal2" header="Register" key={9}>
              <Register handleRegister={handleRegister} key={10} />
            </Modal>
          </NavItem>
        ]}
  </Navbar>
);

export default AppNavbar;
