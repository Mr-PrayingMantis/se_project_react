import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink className ="header__nav-link" to= "/" >
      <img className="header__logo" src={logo} alt="app logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <NavLink className ="header__nav-link" to="/profile">
      <div className="header__user">
        <p className="header__username">Zote</p>
        <img src={avatar} alt="Zote" className="header__avatar" />{" "}
      </div>
      </NavLink>
    </header>
  );
} //<img src={headerLogo} alt="App logo" />

export default Header;
