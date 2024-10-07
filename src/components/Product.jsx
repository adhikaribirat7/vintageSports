import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PreviewProduct from "./PreviewProduct";

function Product() {
  
  // console.log("component rendering")
  const id = useSelector((state) => state.productReducer.produt);
  const product_single = useSelector((state) => state.productReducer.products);


  // useEffect(() => {
  //   console.log(id);
  //   console.log(product_single)
  // }, [id]);

  const [object, setobject] = useState("");


  const valid_product = product_single.find((product) => product.id === id);
  // useEffect(() => {
  //   // console.log(valid_product)
  //   setobject(valid_product);
  //   // console.log(object)
  // }, [id, valid_product, object]);
  

  useEffect(() => {
    if (valid_product && valid_product !== object) {
      setobject(valid_product);
    }
  }, [valid_product, object]); 


  return (
    <div className="sm:col-span-12 col-span-7 border-2 border-black flex sm:flex-row flex-col p-3 gap-4 justify-center items-center h-auto">
      <PreviewProduct product_object={object} />
    </div>
  );
}

export default Product;
