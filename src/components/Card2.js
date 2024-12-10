import { useDispatch, useSelector } from "react-redux";
// import "./Card2.css";
// import "./Main.css";
import "./Card.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState, memo, useRef } from "react";
import { addtocartcontext } from "../context/Addtocartcontext";
import { increaseCart, decreaseCart } from "./reducers/addToCart.reducer";
const Card2 = ({ pro }) => {
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  function addbutton(event) {
    dispatch(increaseCart({ proid: pro._id }));
  }

  function removebutton(event) {
    dispatch(decreaseCart({ proid: pro._id }));
  }

  const cardRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when the card is in the viewport
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      {
        threshold: 0.1, // 10% of the card should be visible to trigger the animation
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    
    <div className="div_main_cart" ref={cardRef}>
      <div className="image-div2">
        <img className="img2" src={pro.image1} />
      </div>
      <h1 className="title2">{pro.name}</h1>
      <div className="rate-flex">
        <h2 className="rate2">₹{pro.price}</h2>
        <h6 className="mrp2">
          <strike>₹{pro.mrp}</strike>
        </h6>
      </div>
      <div className="button-div2">
        <div
          className={`add-to-cart2 product-add-button  ${
            count[pro._id] ? "product-add-button-disable" : ""
          }`}
          onClick={addbutton}
        >
          <h3>Add to cart</h3>
        </div>
        <div
          className={`add-to-cart2   ${
            count[pro._id] === undefined || count[pro._id] === 0
              ? "counter-disable"
              : ""
          }`}
          onClick={removebutton}
        >
          <h3>Added</h3>
        </div>
        <div className="buy-now2">
          <h3>BUY NOW</h3>
        </div>
      </div>
    </div>
  
  );
};

export default Card2;
