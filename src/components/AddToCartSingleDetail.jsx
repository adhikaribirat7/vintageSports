import React, { useEffect, useState } from "react";
import ronaldo from "../assets/ronaldo.jpg.png";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/featureProduct";

const AddToCartSingleDetail = ({ element }) => {
  const dispatch = useDispatch();

  // console.log(element)
  // useEffect(() => {
  //   console.log(element)
  // }, [element])
  const handleDispatch = () => {
    // console.log(element);
    dispatch(removeFromCart(element));

    // dispatch(removeFromCart(element))
  };

  // useEffect(() => {
  // }, [handleDispatch]);

  const [cartNumber, setCartNumber] = useState(0);
  const handleCartChange = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "-") {
      setCartNumber((prev) => prev - 1);
    } else if (event.target.innerText === "+") {
      setCartNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="border-4 rounded-xl border-bg-grey w-full flex gap-4 justify-center items-center sm:flex-row flex-col ">
      <div className="border-2  border-black">
        <img src={ronaldo} alt="" className="w-[250px]" srcSet="" />
      </div>
      <div className="border-2 sm:w-[50%] w-full p-2 flex justify-evenly border-black">
        <div>
          <p>{element}</p>
          <p>Large</p>
          <p>color</p>
          <p>Price</p>
        </div>
        <div className="flex flex-col justify-between  border-2 items-center border-black">
          <button onClick={() => handleDispatch()}>
            <MdDelete className="text-4xl" />
          </button>
          <div className="flex">
            <button
              className="text-white text-center text-4xl font-semibold  rounded-l-xl px-1 w-14 bg-gray-800 "
              onClick={(event) => cartNumber != 0 && handleCartChange(event)}
            >
              -
            </button>
            <div className="flex w-8/12">
              <input
                type="text"
                // defaultValue="0"
                value={cartNumber}
                readOnly
                className="bg-white text-sm text-gray-900 text-center focus:outline-none border  border-gray-600  w-full"
              />
            </div>
            <button
              className="text-white text-center text-4xl font-semibold  rounded-r-xl px-1 w-14 bg-gray-800 "
              onClick={(event) => handleCartChange(event)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSingleDetail;
