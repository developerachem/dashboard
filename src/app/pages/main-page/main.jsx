import { useState } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

function MainPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="flex justify-between h-[100%]">
        <div
          style={{
            width: `calc(100% - ${toggle ? 85 : 100}%)`,
            transition: "0.3s",
          }}
          className="overflow-y-auto bg-white"
        >
          <Sidebar />
        </div>
        <div
          className="p-5 pt-[85px] h-[100vh] overflow-y-auto"
          style={{
            width: `calc(100% - ${toggle ? 15 : 0}%)`,
            transition: "0.3s",
          }}
        >
          {<Outlet />}
        </div>
      </div>
    </>
  );
}

export default MainPage;
