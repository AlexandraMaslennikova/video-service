import { useState } from "react";
import UserName from "./UserName";
import UserInput from "./UserInput";

function UserLoggedIn(props) {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditName() {
    setIsEdit(true);
  }

  function handleSubmitName() {
    setIsEdit(false);
  }

  return (
    <div className="header__auth">
      <div>
        {isEdit ? (
          <UserInput
            userName={props.userName}
            onAddLogin={props.onAddLogin}
            onSubmit={handleSubmitName}
          />
        ) : (
          <UserName userName={props.userName} onEdit={handleEditName} />
        )}
      </div>
      <button
        type="button"
        className="header__logout-button"
        onClick={props.onLogout}
      >
        Выйти
      </button>
    </div>
  );
}

export default UserLoggedIn;