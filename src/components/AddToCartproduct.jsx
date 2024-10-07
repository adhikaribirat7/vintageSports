import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddToCartSingleDetail from "./AddToCartSingleDetail";

const AddToCartproduct = () => {
  const [addToCartId, setaddToCartId] = useState();

  const objectId = useSelector((state) => state.productReducer.addToCart);
//   const object =useSelector((state)=>state.productReducer.products)
//   useEffect(() => {
// console.log(object)
//   }, [object])
  

  useEffect(() => {
    // console.log(objectId);
    setaddToCartId(objectId);
  }, [objectId]);
  // useEffect(() => {
  //   console.log(addToCartId);
  // }, [addToCartId]);

  return (
    <div className="border-2 border-black w-full flex justify-center items-center sm:flex-row gap-3 flex-col ">
      {/* <div className="border-4 rounded-xl border-bg-grey w-full flex gap-4 justify-center items-center sm:flex-row flex-col ">
        <div className="border-2  border-black">
          <img src={ronaldo} alt="" className="w-[250px]" srcSet="" />
        </div>
        <div className="border-2 sm:w-[50%] w-full p-2 flex justify-evenly border-black">
          <div>
          <p>Title</p>
          <p>Large</p>
          <p>color</p>
          <p>Price</p>
          </div>
          <div className="flex flex-col justify-between  border-2 items-center border-black">
            <button><MdDelete className="text-4xl" /></button>
            <div className="flex">
            <button className="text-white text-center text-4xl font-semibold  rounded-l-xl px-1 w-14 bg-gray-800 " onClick={(event)=>cartNumber!=0 && handleCartChange(event)}>
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
            <button className="text-white text-center text-4xl font-semibold  rounded-r-xl px-1 w-14 bg-gray-800 " onClick={(event)=>handleCartChange(event)}>
              +
            </button>
          </div>
          </div>

        </div>
      </div> */}
      <div  className="flex flex-col w-full" >
        {Array.isArray(addToCartId) && addToCartId.length === 0
          ? <h1>Please Select some Product First</h1>
          : Array.isArray(addToCartId) &&
            addToCartId.map(
              (element) => 
              <AddToCartSingleDetail key={element} element={element} />
              // console.log(element)
            )}
      </div>

      <div className="border-4 rounded-xl justify-center items-center flex flex-col gap-4 border-bg-grey h-full  sm:w-[40%] w-full ">
        <span>Order Summary</span>
        <span>Order Summary</span>
        <span>Order Summary</span>
        <span>Order Summary</span>
      </div>
    </div>
  );
};

export default AddToCartproduct;
