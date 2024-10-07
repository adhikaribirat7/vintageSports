import React from "react";
import AddToCartproduct from "./AddToCartproduct";

const AddToCart = () => {
  return (
    <div className="sm:col-span-12 col-span-7 border-2  border-black gap-4 px-20 flex flex-col ">
      <span className="sm:text-6xl  text-4xl font-bold">YOUR CART</span>
    <AddToCartproduct/>
    </div>
  );
};

export default AddToCart;
