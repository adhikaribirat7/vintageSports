import React from "react";
import { IoMdClose } from "react-icons/io";

function Header() {
  return (
    <div className="bg-black sm:col-span-12 col-span-7 text-white items-center overflow-x-hidden flex text-xs sm:text-2xl  justify-evenly w-[100%] h-[40px]">
      <div className="flex w-[80%]  justify-center">
        Sign up and get 20% off to your first order.
        <span>Sign Up now</span>
      </div>
      <IoMdClose className="text-xl" />
    </div>
  );
}

export default Header;
