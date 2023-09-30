import SidebarList from "./sidebar-list";
import style from "./sidebar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import {
  AiOutlinePlusSquare,
  AiOutlineSetting,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="pt-[85px] w-full  h-[100vh] border-r px-5">
      <ul className={style.ul}>
        <SidebarList
          icon={<LuLayoutDashboard size={20} />}
          title="Dashboard"
          link="/dashboard"
        />
        <SidebarList title="Users" icon={<FaUsers size={20} />} id="users">
          <ul>
            <SidebarList
              title="User List"
              icon={<AiOutlineUnorderedList size={20} />}
            />
            <SidebarList
              title="Create Users"
              icon={<AiOutlinePlusSquare size={20} />}
            />
          </ul>
        </SidebarList>
        <SidebarList
          title="Expense"
          icon={<BiMoneyWithdraw size={20} />}
          id="expense"
        >
          <ul>
            <SidebarList
              title="Expense List"
              icon={<AiOutlineUnorderedList size={20} />}
            />
            <SidebarList
              title="Create Expense"
              icon={<AiOutlinePlusSquare size={20} />}
            />
          </ul>
        </SidebarList>
        <SidebarList icon={<AiOutlineSetting size={20} />} title="Settings" />
      </ul>
    </div>
  );
}

export default Sidebar;
