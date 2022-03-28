import { useState } from "react";

export default function UserInput(props) {
  const [newUserName, setNewUserName] = useState(props.userName);

  function handleChangeUserName(e) {
    setNewUserName(e.target.value);
  }

  function handleSubmitName(e) {
    e.preventDefault();

    props.onAddLogin(newUserName);
    props.onSubmit();
  }

  return (
    <input
      type="text"
      className="header__input header__input_type_name"
      value={newUserName}
      onChange={handleChangeUserName}
      onBlur={handleSubmitName}
    />
  );
}
