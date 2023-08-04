import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full max-w-[460px] mx-auto bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full px-5 flex justify-between items-center text-2x1 text-white/90">
          <Link className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]">
            <BiHomeAlt />
          </Link>
          <Link className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]">
            <BiUser />
          </Link>
          <Link className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]">
            <BsClipboardData />
          </Link>
          <Link className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
