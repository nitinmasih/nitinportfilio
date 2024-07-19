import React from "react";
import "../styles/navbar.scss";

const Navbar = ({ clickhamburger, isChecked, setIsChecked }) => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Portfolio</div>
        <div className="hamburger">
          <input
            onClick={clickhamburger}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="nav__checkbox"
            id="toggle"
          />
          <label htmlFor="toggle" className="nav__button">
            <span className="nav__icon">&nbsp;</span>
          </label>
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
