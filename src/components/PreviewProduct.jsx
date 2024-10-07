import React, { useEffect, useState } from "react";
import ronaldo from "../assets/ronaldo.jpg.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/featureProduct";

function PreviewProduct({ product_object }) {
  const dispatch = useDispatch();
  // console.log(product_object.id)
  console.log("component rendered 1")
  const [singleProduct, setsingleProduct] = useState();
  const handleAddToCart = (id) => {
    console.log(id);
    setsingleProduct(id);
  };
  useEffect(() => {
    console.log("component rendered 2")
    if (singleProduct) {
      dispatch(addToCart(singleProduct));
    }
  }, [singleProduct]);

  return (
    <>
      <div className="border-2 h-[100%] sm:w-[50%] border-black flex justify-center items-center  sm:flex-row flex-col gap-5 p-3 ">
        <div className="border-2 flex sm:flex-col h-[100%]  sm:w-[40%] justify-center items-center flex-row border-black">
          <div className="border-2 flex justify-center w-full  border-red">
            <img
              src={ronaldo}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-auto"
            />
          </div>
          <div className="border-2 w-full flex justify-center border-red">
            <img
              src={ronaldo}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-auto"
            />
          </div>
          <div className="border-2 w-full flex justify-center border-red">
            <img
              src={ronaldo}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
            />
          </div>
        </div>
        <div className="border-2 flex justify-center items-center h-[100%] sm:w-[50%] border-black">
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-full h-[200px] w-[200px] sm:w-full"
          />
        </div>
      </div>
      <div className="border-2  h-[100%] sm:w-[50%] p-3 border-black flex flex-col sm:justify-start justify-center items-center sm:items-start sm:gap-10 gap-5">
        <span className="sm:text-6xl text-4xl font-extrabold">
          {product_object ? product_object.title : "first select product"}
        </span>
        <span>RATING</span>
        <span>PRICING</span>
        <p className="text-gray-400 text-2xl font-semibold">DESCRIPTIONS</p>
        <hr className="w-full bg-bg-grey border-1 "></hr>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-2xl text-gray-400 semibold">Choose Size</p>
          <div className="flex sm:flex-row flex-wrap gap-3">
            <button
              className="w-24 bg-bg-grey rounded-full p-3 text-xl font-semibold"
              type="submit"
            >
              Small
            </button>
            <button
              className="w-24 bg-bg-grey rounded-full p-3 text-xl font-semibold"
              type="submit"
            >
              Medium
            </button>
            <button
              className="w-24 bg-bg-grey rounded-full p-3 text-xl font-semibold"
              type="submit"
            >
              Large
            </button>
            <button
              className="w-24 bg-bg-grey rounded-full p-3 text-xl font-semibold"
              type="submit"
            >
              x-large
            </button>
          </div>
        </div>
        <hr className="w-full bg-bg-grey border-1 "></hr>

        <div className="flex border-2 gap-3 justify-evenly items-center  border-black sm:w-1/2 h-20">
          {/* <div className="flex">
            <button className="text-white text-center text-4xl font-semibold  rounded-l-xl px-1 w-14 bg-gray-800 ">
              -
            </button>
            <div className="flex w-8/12">
              <input
                type="text"
                defaultValue="7"
                className="bg-white text-sm text-gray-900 text-center focus:outline-none border  border-gray-600  w-full"
              />
            </div>
            <button className="text-white text-center text-4xl font-semibold  rounded-r-xl px-1 w-14 bg-gray-800 ">
              +
            </button>
          </div> */}
          <div className="sm:w-1/2 w-full">
            <button
              type="submit"
              className="text-white bg-black rounded-full p-2 sm:text-2xl w-full"
              onClick={() => handleAddToCart(product_object.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewProduct;
