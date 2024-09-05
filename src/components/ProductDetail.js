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
  const [image, setImage] = useState('');

  const getproducts = async () => {
    console.log(param.id)
    try {
      const response = await axiosInstance.get(`/productcreate/prod/${param.id}`);
      const dat = response.data.data;
      console.log(dat);

      if (dat) {
        sessionStorage.setItem(`oneproduct${param.id}`,JSON.stringify(dat));
        setdata(dat);
        setImage(dat.image1);
        console.log(dat);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const sessiondata  = sessionStorage.getItem(`oneproduct${param.id}`)
    if(sessiondata){
      const temp = JSON.parse(sessiondata)
      setdata(temp);
      setImage(temp.image1);
    }else{

    
    getproducts();
    }
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
  
  
  function changeImg(event) {
   
    setImage(event);
  }

  return (
    <>
      {data ? (
        <div className="main-product-detail  font-[sans-serif]">
          <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="w-full  top-0 sm:flex gap-2">
                <div className="image-container-prod">
                  <img
                    onClick={()=>changeImg(data.image1)}
                    src={data.image1}
                    alt="Product1"
                    className={`thumbnail ${image===data.image1?"prod-border":""}`}
                  />
                  <img
                    onClick={()=>changeImg(data.image2)}
                    src={data.image2}
                    alt="Product2"
                    className={`thumbnail ${image===data.image2?"prod-border":""}`}
                  />
                  <img
                    onClick={()=>changeImg(data.image3)}
                    src={data.image3}
                    alt="Product3"
                    className={`thumbnail ${image===data.image3?"prod-border":""}`}
                  />
                  <img
                    onClick={()=>changeImg(data.image4)}
                    src={data.image4}
                    alt="Product4"
                    className={`thumbnail ${image===data.image4?"prod-border":""}`}
                  />
                </div>
                <img
                  src={image}
                  alt="Product"
                  class="main-image-prod"
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
        <div className="product-load"><div class="text-center">
        <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div></div>
      )}
    </>
  );
};

export default ProductDetail;
