/* eslint-disable react/prop-types */
import { FaBell } from "react-icons/fa";
import Logo from "../logo/logo";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

function Header({ toggle, setToggle }) {
  return (
    <>
      <div className="py-2 px-5 bg-white flex justify-between fixed top-0 w-full border-b z-50 items-center">
        <div className="flex items-center gap-20">
          <Logo className="w-[150px]" />
          <BsLayoutTextSidebarReverse
            size={22}
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="flex items-center gap-10">
          <FaBell size={25} />

          <img
            src="/avatar.jpg"
            className="h-[40px] w-[40px] rounded-full cursor-pointer border"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;
