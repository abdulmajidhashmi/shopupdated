import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card3.css";
import { useNavigate } from "react-router-dom";
import { increaseCart, decreaseCart } from "./reducers/addToCart.reducer";
const Card3 = ({ pro }) => {
  const cardRef = useRef(null);
  const addtocartRef = useRef(null);
  const navigate = useNavigate();

  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

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

  function linktopage() {
    navigate(`/product-detail/${pro._id}`);

    console.log("hi");
  }

  function stop(event) {
    event.stopPropagation();
    dispatch(increaseCart({ proid: pro._id }));
  }

  function removebutton(event) {
    event.stopPropagation();
    dispatch(decreaseCart({ proid: pro._id }));
  }

  return (
    <>
      <div className="main-cont-3 " ref={cardRef} onClick={linktopage}>
        <div className="img-div-3">
          <img className="img-3" src={pro.image1} />
        </div>

        <h2 className="name-3">{pro.name}</h2>

        <div className="price-flex-3">
          <h3 className="price-3">₹{pro.price}</h3>
          <h3 className="mrp-3">
            <strike>₹{pro.mrp}</strike>
          </h3>
        </div>

        <div
          className={`add-to-cart-3  ${
            count[pro._id] ? "add-to-cart-3-disable" : ""
          }`}
          ref={addtocartRef}
          onClick={stop}
        >
          <p>ADD TO CART</p>
        </div>
        <div
          className={`add-to-cart-3  ${
            count[pro._id] === undefined || count[pro._id] === 0
              ? "counter-disable"
              : ""
          }`}
          onClick={removebutton}
        >
          <p><i class="fa-solid fa-check"></i> ADDED</p>
        </div>
      </div>
    </>
  );
};

export default Card3;
