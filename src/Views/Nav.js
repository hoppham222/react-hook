import React from "react";
import './Nav.scss';
import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="topnav" >
        <NavLink activeClassName="active" to="/Covid">Covid</NavLink>
        <NavLink to="/Countdown">Countdown</NavLink>
        <NavLink to="/NewCountDown">NewCountDown</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
      </div>
    </>
  );
}

export default Nav;