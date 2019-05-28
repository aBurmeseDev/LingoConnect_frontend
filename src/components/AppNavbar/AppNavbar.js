import React from "react";
import * as routes from "../constants/routes";
import { Navbar, NavItem, Button } from "react-materialize";
import Register from "../Register/Register"

const AppNavbar = ({regModal, showModal, closeModal, handleRegister}) => (
  <Navbar alignLinks="right">
    <NavItem>
          {/* <button onClick={regModal} > */}
          <div onClick={regModal}>
            Register
          </div>
          {/* </button> */}
          {showModal ? (
          <Register closeModal={closeModal} handleRegister={handleRegister}/>
          ) : null}
    </NavItem> 
    <NavItem>Account</NavItem>
  </Navbar>
);

export default AppNavbar;
