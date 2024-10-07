import React, { useEffect, useState } from "react";
import NewArrival from "./NewArrival";
import { useSelector } from "react-redux";

function NewArrivals() {
  const [length, setLength] = useState(5);
  const [isviewMore, setIsViewMore] = useState(false);
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products)

  // console.log(products)
  const lengthHandeler = () => {
    setIsViewMore((prev) => !prev);
    if (isviewMore) {
      setLength(5);
    } else {
      setLength(10);
    }
  };

  return (
    <>
      <div
        className="sm:col-span-12 col-span-7 w[100%]  m-auto flex mt-24  
    flex-col justify-center items-center gap-4 "
      >
        <p className="text-6xl font-extrabold">NEW ARRIVALS</p>
        <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  sm:grid-cols-2 sm:px-2">
          {products.slice(0, length).map((obj) => (
            <NewArrival key={obj.id} id={obj.id} title={obj.title} />
          ))}
        </div>
        <button
          type="submit"
          onClick={() => lengthHandeler()}
          className="border-2 border-gray-300 p-2 rounded-full
       w-[218px] text-xl font-semibold"
        >
          {!isviewMore ? " View More" : "View Less"}
        </button>
      <hr className="sm:w-full bg-bg-grey border-2 "></hr>

      </div>
    </>
  );
}

export default NewArrivals;
