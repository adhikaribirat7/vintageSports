import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Input from "../Input";
import { Link } from 'react-router-dom';


const list = [
  "Futsal/Football Boots",
  "Socks/Shin Pads",
  "Futsal/Football Boots",
  "Balls's",
  "Jersey",
  "Vintage Jerseys",
  "Sports Pants",
  "Your cart"
];
const Nav = () => {
  return (
    <nav className=" p-3 sticky top-0 z-30 bg-bg-grey sm:col-span-12 col-span-7 flex justify-evenly items-center w-[100%]  ">
      <Link to="/" className="font-extrabold text-3xl">VINTAGE SPORTS</Link>
      <div  className="sm:flex gap-5 hidden">
        <span className="text-2xl">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Shop
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {list.map((items) => {
                  return (
                    <MenuItem key={items}>
                      <Link
                        to={items==="Your cart"?"/cart":"/products_all"}
                        
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        {items}
                      </Link>
                    </MenuItem>
                  );
                })}
              </div>
            </MenuItems>
          </Menu>
        </span>
        <span className="text-2xl">On sale</span>
        <span className="text-2xl">New arrivals</span>
        <span className="text-2xl">Brands</span>
      </div>
      <div className="w-96 hidden overflow-x-hidden justify-center sm:flex items-center gap-4 bg-gray-200  rounded-full p-1 ">
        <CiSearch className="text-2xlfont-semibold text-gray-500 ml-5" />
        <Input />
      </div>
      <Link 
      to="/cart"
      >
      
        <CiShoppingCart className="text-3xl" />
      </Link>
    </nav>
  );
};

export default Nav;
