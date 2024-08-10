import "./Main.css";
import "./Card.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState,memo } from "react";
import { addtocartcontext } from "../context/Addtocartcontext";
import { useSelector, useDispatch } from "react-redux";
import { increaseCart, decreaseCart } from "./reducers/addToCart.reducer";
import Animations from "./Animations";
const ProductCard = ({ pro }) => {
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  
  const addtocartusecontext = useContext(addtocartcontext);
  const { addtocart, setaddtocart } = addtocartusecontext;

  function addbutton(event) {
    dispatch(increaseCart({ proid: pro._id }));
  }

  function removebutton(event) {
    dispatch(decreaseCart({ proid: pro._id }));
  }
  return (
    <div className="relative m-4 flex w-full max-w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        to={`/product-detail/${pro._id}`}
        class=" grad relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl"
      >
        <img
          class="object-cover  "
          loading="lazy"
          src={pro.image1}
          alt="product image"
        />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {Math.round(((pro.mrp - pro.price) / pro.mrp) * 100)}% OFF
        </span>
      </Link>

      <div className="mt-4 px-5 pb-5 ">
        <h5 class="text-xl tracking-tight name-title font-medium product-name-weight text-slate-900">
          {pro.name}
        </h5>

        <div className="mt-2 mb-1 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold price-green text-slate-900">
              ₹{pro.price}
            </span>
            <span class="text-sm text-slate-900 mrp-red line-through">
              ₹{pro.mrp}
            </span>
          </p>
        </div>
        <div
          className={` flex items-center justify-start addeds ${
            count[pro._id] ? "addeds-enable" : "addeds"
          }`}
        >
          {" "}
          <i class="fa-regular fa-circle-check mr-1"></i>added to cart
        </div>

        <div
          onClick={removebutton}
          className={`counter flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300  ${
            count[pro._id] === undefined || count[pro._id] === 0
              ? "counter-disable"
              : ""
          }`}
        >
          <div className="remove ">Remove from cart</div>
        </div>

        <div
          className={`product-add-button flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            count[pro._id] ? "product-add-button-disable" : ""
          }`}
          onClick={addbutton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
