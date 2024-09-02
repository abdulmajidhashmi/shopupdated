import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import "./Main.css";
import sukkary from "./../images/sukkary.jpg";
import kimia from "./../images/kimia.jpeg";
import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increaseCart, decreaseCart } from "./reducers/addToCart.reducer";
import { axiosInstance } from "./backend/axiosInstance";
import { Descriptions } from "antd";

const ProductDetail = () => {
  const param = useParams(); // Destructure the id from useParams
  const navigate = useNavigate();
  const [data, setdata] = useState();

  const getproducts = async () => {
    console.log(param.id)
    try {
      const response = await axiosInstance.get(`/productcreate/prod/${param.id}`);
      const dat = response.data.data;
      console.log(dat);

      if (dat) {
        
        setdata(dat);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  

  

  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  function addbutton(event) {
    dispatch(increaseCart({ proid: event }));
  }
  
  function buynow(event) {
    const currentCount = count[event] || 0;
    if (currentCount === 0) {
      dispatch(increaseCart({ proid: event }));
    }
    navigate('/addtocart');
  }
  
  useEffect(()=>{
    console.log("the count before",count);
  },[count])
  function removebutton(event) {
    dispatch(decreaseCart({ proid: event }));
  }

  const [image, setImage] = useState(kimia);
  function changeImg(event) {
    setImage(event.target.src);
  }

  return (
    <>
      {data ? (
        <div className="main-product-detail  font-[sans-serif]">
          <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="w-full lg:sticky top-0 sm:flex gap-2">
                <div class="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                  <img
                    onClick={changeImg}
                    src={sukkary}
                    alt="Product1"
                    class={`w-full cursor-pointer ${
                      image === sukkary ? "outline" : ""
                    }`}
                  />
                  <img
                    onClick={changeImg}
                    src={kimia}
                    alt="Product2"
                    class={`w-full cursor-pointer ${
                      image === kimia ? "outline" : ""
                    }`}
                  />
                  <img
                    onClick={changeImg}
                    src={sukkary}
                    alt="Product3"
                    class={`w-full cursor-pointer ${
                      image === sukkary ? "outline" : ""
                    }`}
                  />
                  <img
                    onClick={changeImg}
                    src={kimia}
                    alt="Product4"
                    class={`w-full cursor-pointer ${
                      image === kimia ? "outline" : ""
                    }`}
                  />
                </div>
                <img
                  src={data.image1}
                  alt="Product"
                  class="w-4/5 rounded object-cover"
                />
              </div>
              <div className="cards1">
                <h2 className="title1 text-2xl font-extrabold text-gray-800">
                  {data.name}
                </h2>
                <div class="flex flex-wrap gap-4 mt-4">
                  <p class="text-gray-800 text-xl font-bold">₹{data.price}</p>
                  <p class="text-gray-400 text-xl">
                    <strike>₹{data.mrp}</strike>
                  </p>
                </div>

                <div class="mt-8">
                  <h3 class="text-lg font-bold text-gray-800">Weight</h3>
                  <div class="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      class="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      {data.weight}
                    </button>
                  </div>
                  <div class="mt-8 space-y-4">
                    {/* <Link to="/addtocart"> */}
                      <button
                        onClick={() => buynow(data._id)}
                        type="button"
                        class="w-full px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
                      >
                        Buy now
                      </button>
                    {/* </Link> */}
                    <button
                      onClick={() => addbutton(data._id)}
                      type="button"
                      class={`addtocart  ${
                        count[data._id] ? "addtocart-disable" : ""
                      } w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded`}
                    >
                      Add to cart
                    </button>

                    <div
                      className={`   counters ${
                        count[data._id] === undefined || count[data._id] === 0
                          ? "counter-disable"
                          : ""
                      } `}
                    >
                      <button
                        onClick={() => removebutton(data._id)}
                        type="button"
                        class="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>

                      <button
                        type="button"
                        class="bg-transparent px-4 py-2  font-semibold text-[#333] text-md"
                      >
                        {count[data._id]}
                      </button>
                      <button
                        onClick={() => addbutton(data._id)}
                        type="button"
                        class="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-8">
                  <h3 class="text-lg font-bold text-gray-800">
                    About the item
                  </h3>
                  <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                    <li>
                      {data.description}
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default ProductDetail;
