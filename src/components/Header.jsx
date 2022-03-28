import React from "react";
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut"


function Header(props) {
  const isLoggedIn = props.loggedIn;

  return (
    <header className="header">
      <a className="header__logo" href="#" target="_blank" rel="noopener"></a>
      <form className="header__form" name="form">
        <input
          className="header__input"
          type="text"
          name="search"
          placeholder="Поиск..."
          autoComplete="off"
        />
        <button className="header__submit-btn" type="submit">
          Найти
        </button>
      </form>
      <div className="header__section">
        {isLoggedIn ? (
          <UserLoggedIn
            userName={props.userName}
            onLogout={props.onLogout}
            onAddLogin={props.onAddLogin}
          />
        ) : (
          <UserLoggedOut onPopupClick={props.onPopupClick} />
        )}
      </div>
    </header>
  );
}

export default Header;
