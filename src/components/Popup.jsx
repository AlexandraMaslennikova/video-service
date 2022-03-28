import React from "react";
import { useState } from "react";

function Popup(props) {

  const [login, setLogin] = useState("");

  function handleChangeLogin(e) {
    setLogin(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddLogin(login);
  }

  return (
    <article className={`popup ${props.isOpen ? "popup_opened" : ""} `}>
      <div className="popup__conteiner">
        <button
          className="popup__close"
          aria-label="Закрыть окно редактирования"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">Вход</h2>
        <form className="popup__form" name="form" onSubmit={handleSubmit}>
          <input
            className="popup__input popup__input_type_login"
            id="login"
            type="text"
            placeholder="Логин"
            name="login"
            minLength="2"
            required
            value={login}
            onChange={handleChangeLogin}
          />
          <input
            className="popup__input popup__input_type_password"
            id="password"
            type="text"
            placeholder="Пароль"
            name="password"
            minLength="6"
            required
          />
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="popup__input popup__input_type_checkbox"
          />
          <label htmlFor="remember">Запомнить</label>
          <button className="popup__submit" type="submit">
            Войти
          </button>
        </form>
      </div>
    </article>
  );
}

export default Popup;
