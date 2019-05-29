import React from "react";
// import * as routes from "../constants/routes";
import { Navbar, Modal, NavItem } from "react-materialize";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";
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
          <NavLink key={3} to={routes.USER}>
            Account
          </NavLink>,
          <NavLink key={4} onClick={doLogout}>
            Logout
          </NavLink>
        ]
      : [
          <NavItem key={1}>
            <div key={2} href="#modal1" className="modal-trigger">
              Login
            </div>
            ,
            <Modal id="modal1" header="" key={10}>
              <Login
                handleLogin={handleLogin}
                loginMessage={loginMessage}
                currentUser={currentUser}
                key={11}
              />
            </Modal>
          </NavItem>,
          <NavItem key={5}>
            <div href="#modal2" className="modal-trigger" key={6}>
              Register
            </div>
            <Modal id="modal2" header="Register" key={7}>
              <Register handleRegister={handleRegister} key={8} />
            </Modal>
          </NavItem>
        ]}
  </Navbar>
);

export default AppNavbar;
