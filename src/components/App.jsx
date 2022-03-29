import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./Tabs";
import New from "./New";
import Genres from "./Genres";
import Channels from "./Channels";
import Popup from "./Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  //открытие попапа
  function handlePopupClick() {
    setIsPopupOpen(true);
  }

  //закрытие попапа
  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  //получение имени пользователя
  function getUserName() {
    const name = localStorage.getItem("login");
    setUserName(name);
  }

  //получение имени пользователя при загрузке страницы
  useEffect(() => {
    if (localStorage.getItem("login")) {
      getUserName();
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    
  }, [])

  //сохраниние имени пользователя
  function handleAddLogin(data) {
    setUserName(data);
    setLoggedIn(true);
    localStorage.setItem("login", data);
    handleClosePopup();
  }

  //выход
  function logout() {
    setLoggedIn(false);
    localStorage.removeItem("login");
  }

  return (
    <div className="App">
      <div className="page">
        <Header
          loggedIn={loggedIn}
          userName={userName}
          onPopupClick={handlePopupClick}
          onLogout={logout}
          onAddLogin={handleAddLogin}
        />
        <Tabs />
        <Switch>
          <Route exact path="/">
            <New />
            <Genres />
          </Route>
          <Route exact path="/channels">
            <Channels />
          </Route>
        </Switch>

        <Footer />

        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onAddLogin={handleAddLogin}
        />
      </div>
    </div>
  );
}

export default App;
