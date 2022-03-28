function UserLoggedOut(props) {
    return (
      <button
        type="button"
        className="header__loggin-button"
        onClick={props.onPopupClick}
      >
        Войти
      </button>
    );
}

export default UserLoggedOut;