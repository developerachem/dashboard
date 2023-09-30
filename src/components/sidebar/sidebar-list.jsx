/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

function SidebarList({ children, icon, title, id, link }) {
  if (children && id) {
    return (
      <li>
        <label className="flex justify-between" htmlFor={id}>
          <p className="flex gap-2">
            {icon} {title}
          </p>
          <BiChevronDown size={25} />
        </label>
        <input type="radio" id={id} name="sidebar" />
        {children}
      </li>
    );
  }
  if (!children) {
    return (
      <>
        <li>
          <Link to={link || "/"} className="flex items-center gap-2">
            {icon}
            {title}
          </Link>
        </li>
      </>
    );
  }
}

export default SidebarList;
