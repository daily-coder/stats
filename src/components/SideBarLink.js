import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

function SideBarLink({ to, linkText, hideMenu }) {
  return (
    <NavLink
      className="inline-block w-full cursor-pointer px-6 py-3 transition-all hover:bg-blue-800 hover:pl-7"
      to={to}
      onClick={hideMenu}
    >
      {linkText}
    </NavLink>
  );
}

SideBarLink.propTypes = {
  to: propTypes.string.isRequired,
  linkText: propTypes.string.isRequired,
  hideMenu: propTypes.func.isRequired,
};

export default SideBarLink;
