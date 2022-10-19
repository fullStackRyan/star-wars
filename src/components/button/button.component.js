import "./button.styles.css";

export const BUTTON_TYPE_CLASSES = {
  disabled: "disabled",
  notDisabled: "not-disabled",
};

const Button = ({ children, disabled, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
