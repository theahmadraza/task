import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faUser,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/image/logo.png";

function App() {
  const [menu, setMenu] = useState(false);

  const openToggleHandler = () => {
    setMenu(true);
  };

  const closeToggleHandler = () => {
    setMenu(false)
  }

  return (
    <div className="task">
      <div className="desktop_view">
        <h1>This App is Just Use for Only Mobile Version</h1>
      </div>
      <div className="mobile_view">
        <div className="mobile_view-navbar">
            <div className="mobile_view-navbar-left">
              <FontAwesomeIcon onClick={openToggleHandler} icon={faBars} className="navbar-left-icon" />
              <FontAwesomeIcon icon={faPhone} className="navbar-left-icon" />
           
          </div>
          <img src={logo} />
          <div className="mobile_view-navbar-right">
            <FontAwesomeIcon icon={faSearch} className="navbar-right-icon" />
            <FontAwesomeIcon icon={faUser} className="navbar-right-icon" />
          </div>
        </div>
        {menu ? (
          <div className="toggle-navbar">
            <div className="menu_top">
              <div className="menu_top-left">
                <FontAwesomeIcon icon={faUser} className="navbar-right-icon" />
                <h3>LOGIN</h3>
              </div>
              <div className="menu_top-right">
                <FontAwesomeIcon onClick={closeToggleHandler} icon={faXmark} />
              </div>
            </div>
            <div className="menu_bottom">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Types of Burial</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>

            </div>
          </div>
        ) : ""}

        <div className="mobile_view-heroSection">
          <div className="heroSection_button">
            <Button txt="Plan Ahead" />
            <Button txt="Immediate Need" />
            <Button txt="Appointment" />
          </div>
          <div className="heroSection_titleBox">
            <h1>
              when It comes to your End-of-Life Planning, We've got you covered.
            </h1>
            <p>
              Memorial Planning is all about you. As a family-first network of
              cemeteries and funeral homes, honoring your life story is our
              life's work we offer end-of-life solutions to help make the most
              difficult time in life just a little bit easier.
            </p>
          </div>
          <div className="heroSection_search">
            <p className="heroSection_search-title">Find A Location Near You</p>
            <p className="heroSection_search-input">
              Seach by City, State, or Zip Code
            </p>
            <div className="heroSection_search-btn">
              <p>Search Now</p>
              <FontAwesomeIcon
                icon={faSearch}
                className="heroSection_search-icon"
              />
            </div>
            <p className="heroSection_search-txt">View All Locations </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
