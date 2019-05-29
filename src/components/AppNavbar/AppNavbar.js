import React from "react";
import * as routes from "../constants/routes";
import { Navbar, NavItem, Modal, Button } from "react-materialize";
import Login from "../Login/Login"
import Register from "../Register/Register"

const AppNavbar = ({regModal, showModal, closeModal, handleRegister, currentUser, handleLogin, loginMessage, doLogout}) => (
  <Navbar alignLinks="right">
    
    {
      currentUser
      ? [<NavItem>Account</NavItem>, <NavItem>Logout</NavItem>]
      : [<div href="#modal1" className="modal-trigger">
          Login
        </div>,
        <Modal id="modal1" header="">
          <Login handleLogin={handleLogin} loginMessage={loginMessage} currentUser={currentUser}/>
        </Modal>,
        <NavItem>
              <div onClick={regModal}>
                Register
              </div>
              {showModal ? (
              <Register closeModal={closeModal} handleRegister={handleRegister}/>
              ) : null}
      </NavItem> ]
    }
    
    
  </Navbar>
);

export default AppNavbar;
