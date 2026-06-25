import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
function Header({ handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">{currentDate}, Location</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username">Zote</p>{" "}
        <img src={avatar} alt="Zote" className="header__avatar" />{" "}
      </div>
    </header>
  );
} //<img src={headerLogo} alt="App logo" />

export default Header;
