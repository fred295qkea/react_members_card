export default function Button(props) {
  return (
    <>
      {props.variant === "primary" && <button>{props.text}</button>}
      {props.variant === "secondary" && (
        <div>
          <img src="plus.svg" alt="" />
          <p>{props.text}</p>
        </div>
      )}
    </>
  );
}
