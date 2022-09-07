import "./button.css";

export function Button(props) {
  function onClick(e) {
    if (props.preventDefault) {
      e?.preventDefault();
    }
    props.handleBtnClick && props.handleBtnClick();
  }
  const defaultClass = "btn py-2 px-4 subHeading text-light";
  return (
    <button
      disabled={props.isDisabled}
      onClick={onClick}
      className={defaultClass + " " + props.class}
    >
      {props.label}
    </button>
  );
}

export function LinkButton(props) {
  function onClick(e) {
    if (props.preventDefault) {
      e?.preventDefault();
    }
    props.handleBtnClick && props.handleBtnClick();
  }
  return (
    <a className={props.class} onClick={onClick}>
      {props.label}
    </a>
  );
}

export function OutlineButton(props) {
  function onClick(e) {
    if (props.preventDefault) {
      e?.preventDefault();
    }
    props.handleBtnClick && props.handleBtnClick();
  }
  const defaultClass = "btn p-2";
  return (
    <button
      disabled={props.isDisabled}
      className={props.class + " " + defaultClass}
      onClick={onClick}
    >
      {props.label}
    </button>
  );
}