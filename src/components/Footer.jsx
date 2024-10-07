import React from "react";

import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="col-span-12 flex flex-col w-full m-auto p-3 gap-4 ">
      <div className="sm:w-[80%] w-[95%] border-2 bg-black p-3 text-white flex justify-center sm:flex-row flex-col items-center m-auto rounded-3xl sm:h-64 h-96">
        <div className=" sm:w-[50%] flex justify-center items-center h-full">
          <span className="sm:text-7xl text-4xl font-extrabold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 w-full sm:w-[30%] h-full p-3">
          <div className="flex justify-center items-center w-full">
            <MdEmail className="bg-white h-full p-1 text-black rounded-l-xl  sm:text-6xl text-3xl" />
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-r-full text-black w-full pl-4 sm:text-xl outline-none sm:h-14 h-10"
            />
          </div>
          <button
            className="rounded-full text-white bg-black border-2 border-solid outline-none w-full h-10  sm:text-xl font-bold sm:h-14"
            type="submit"
          >
            Subscribe to newsLetter
          </button>
        </div>
      </div>

      <div className="flex  bg-bg-grey justify-evenly flex-wrap ">
        <div className="h-full justify-evenly w-[100%] gap-4 sm:w-[30%]  flex flex-col">
          <span className="text-6xl font-extrabold">VINTAGE SPORTS</span>
          <span className="text-xl text-gray-500 font-semibold">
            We have clothes that suits your style and which you''re proude to
            wear. From woment to men
          </span>
          <div className="flex gap-4">
            <span>insta</span>
            <span>insta</span>
            <span>insta</span>
          </div>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4  flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="h-full justify-evenly  flex flex-col">
<span className="text-2xl font-bold">Company</span>
<span className="text-xl text-gray-500 font-semibold">About</span>
<span className="text-xl text-gray-500 font-semibold">Features</span>
<span className="text-xl text-gray-500 font-semibold">Works</span>
<span className="text-xl text-gray-500 font-semibold">Carrer</span>
</div> */
}
