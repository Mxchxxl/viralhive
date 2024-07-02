import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ text, effect, icon }) => {
  return (
    <button className="custom-button" onClick={effect}>
      {icon && <span>{icon}</span>} {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  effect: PropTypes.func,
  icon: PropTypes.element,
};

Button.defaultProps = {
  icon: null,
  effect: null,
};

export default Button;
