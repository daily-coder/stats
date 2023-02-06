import { NavLink } from "react-router-dom";

interface SideBarLinkProps {
  to: string;
  linkText: string;
  hideMenu(): void;
}

function SideBarLink({ to, linkText, hideMenu }: SideBarLinkProps) {
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

export default SideBarLink;
