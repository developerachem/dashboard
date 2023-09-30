/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Password({ label }) {
  const [show, setShow] = useState(false);
  return (
    <label className="mb-5 block ">
      <p className="mb-2 ms-1">{label}</p>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="input border rounded-md w-full"
          placeholder={"type" + label}
        />
        {!show && (
          <AiOutlineEye
            size={28}
            className="absolute top-[11px] right-2 cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
        {show && (
          <AiOutlineEyeInvisible
            size={28}
            className="absolute top-[11px] right-2 cursor-pointer"
            onClick={() => setShow(false)}
          />
        )}
      </div>
    </label>
  );
}

export default Password;
