import { useState, useContext, useEffect } from "react";
import kimia from "./../images/kimia.jpeg";
import { addtocartcontext } from "../context/Addtocartcontext";
import "./Addtocart.css";
import "./Main.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCart,
  decreaseCart,
  removecart,
} from "./reducers/addToCart.reducer";
import TotalAmount from "./TotalAmount";
import { orderdata } from "./reducers/order.reducer";
import { axiosInstance } from "./backend/axiosInstance";

const Addtocart = () => {
  const [productdata, setproductdata] = useState([]);
  const [addtocartdata, setaddtocartdata] = useState([]);
  const [load,setload] = useState(true);

  const getproduct = async () => {
    try {
      const response = await axiosInstance.get("/productcreate/prod");
      setproductdata(response.data.data);
      setload(false);
      
      console.log("this is data", response.data.data);
    } catch (err) {
      console.log(err);
      setload(false);
    }
  };

  useEffect(() => {
    // const sessiondata = sessionStorage.getItem("products");
    // if (sessiondata) {
    //   setproductdata(JSON.parse(sessiondata));
    // } else {}
      getproduct();
  
    console.log("this is count", count);
  }, []);

  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const hi = useSelector((state) => state.order.order);

  const [cartData, setCartData] = useState({ items: [], totalPrice: 0 });

  useEffect(() => {
    if (productdata.length > 0) {
      setaddtocartdata(productdata.filter((prod) => count[prod._id]));
    }
  }, [productdata, count]);

  function addbutton(event) {
    dispatch(increaseCart({ proid: event }));
  }
  function removebutton(event) {
    dispatch(decreaseCart({ proid: event }));
  }
  function removeproduct(event) {
    dispatch(removecart({ proid: event }));
  }
  useEffect(() => {
    if (addtocartdata.length > 0) {
      const items = addtocartdata.map((prod) => ({
        id: prod._id,
        title: prod.name,
        price: prod.price,
        quantity: count[prod._id],
        total: count[prod._id] * prod.price,
      }));
      console.log(addtocartdata);
      const totalPrice = items.reduce((sum, item) => sum + item.total, 0);

      setCartData({ items, totalPrice });
      console.log({ items, totalPrice });
      // dispatch(orderdata(cartData));

      dispatch(
        orderdata({
          order: { items, totalPrice }, // assuming no orders for now, you can update this as needed
          orderuserdetails: {},
        })
      );
    }
  }, [addtocartdata, count]);

  return (
    <>{load?( <div className="product-load"><div class="text-center">
    <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div></div>):(<div className="screen-height bg-gray-100 pt-7">
    <h1 class="mb-5 text-center text-2xl font-bold">Cart Items</h1>

    <div className="main-div-addtocart  mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="cart-main-div  rounded-lg md:w-2/3">
        {addtocartdata.length === 0 ? (
          <h1 className="cart_empty text-center mx-auto mt-10">
            your cart is empty
          </h1>
        ) : (
          <ul className="ul-addtocart">
            {" "}
            {addtocartdata.map((prod) => (
              <li className="li-addtocart justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  className="li-image  w-full rounded-lg sm:w-40"
                  src={prod.image1}
                ></img>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {prod.name}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700"></p>
                  </div>

                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className={` flex items-center border-gray-100 `}>
                      {/* ${count[prod.id] === undefined ? 'counter-disable' : ''} */}
                      <span
                        className="  cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => removebutton(prod._id)}
                      >
                        -
                      </span>

                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="telephone"
                        value={count[prod._id]}
                        min="1"
                      />

                      <span
                        className="  cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => addbutton(prod._id)}
                      >
                        +
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">₹{count[prod._id] * prod.price}</p>
                      <svg
                        onClick={() => removeproduct(prod._id)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {addtocartdata.length === 0 ? null : (
        <div className="total-amount  mt-6  h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <TotalAmount />
        </div>
      )}
    </div>
  </div>)}
      
    </>
  );
};

export default Addtocart;
