export default function UserName(props) {
  return (
    <p className="header__name" onClick={props.onEdit} >
      {props.userName}
    </p>
  );
}
