import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={{ color: "#0c3e75" }}>{title}</h1>
      <Button
        color={showAdd ? "brown" : "seagreen"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "TaskTracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
