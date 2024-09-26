import "./Main.css";
import "./Header.css";
import Login from "./Login.js";
import { useEffect, useState } from "react";
import kimia from "./../images/kimia.jpeg";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtocartcontext } from "./../context/Addtocartcontext";
import SearchItems from "./SearchItems.js";
import UserData from "./UserData.js";
import { axiosInstance } from "./backend/axiosInstance";
import { setToken, userdata } from "./reducers/user.reducer";
import { useNavigate } from "react-router-dom";
import SearchItem2 from "./SearchItem2.js";

const Header = ({ props }) => {
  const [productdata, setproductdata] = useState([]);

  const getproducts = async () => {
    try {
      const response = await axiosInstance.get("/productcreate/prod");
      const data = response.data.data;

      // const res =data.filter(prod=> prod.category.toLowerCase().includes("dates"));
      setproductdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  

  // useEffect(() => {

  //     const temp = JSON.parse(localStorage.getItem('loginuser'))
  //     if (temp) {
  //         setlogobj(temp.data);
  //     }

  // }, [])

  // const user = useSelector((state) => state.addToCart.loginobj); to use google auth

  const addtocartusecontext = useContext(addtocartcontext);
  const { addtocart, setaddtocart } = addtocartusecontext;

  const bodyRef = document.querySelector("body");

  const searchit = useRef();
  const noresult = useRef();
  const searchit2 = useRef();
  const noresult2 = useRef();
  const searchitul = useRef();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts2, setFilteredProducts2] = useState([]);

  function searchfield(e) {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = productdata.filter((prod) =>
      prod.name.toLowerCase().includes(searchString)
    );
    setFilteredProducts(filteredProducts); // Update the state with filtered products

    if (searchString === "") {
      searchit.current.style.display = "none";
      searchitul.current.style.display = "block";
    } else {
      searchit.current.style.display = "flex";
      searchitul.current.style.display = "none";
    }

    if (filteredProducts.length === 0) {
      noresult.current.style.display = "flex";
      searchitul.current.style.display = "none";
    } else {
      noresult.current.style.display = "none";
      searchitul.current.style.display = "block";
    }
  }

  function searchfield2(e) {
    const searchString2 = e.target.value.toLowerCase();
    const filteredProducts2 = productdata.filter((prod) =>
      prod.name.toLowerCase().includes(searchString2)
    );
    setFilteredProducts2(filteredProducts2); // Update the state with filtered products
    if (searchString2 === "") {
      searchit2.current.style.display = "none";
    } else {
      searchit2.current.style.display = "flex";
    }

    if (filteredProducts2.length === 0) {
      noresult2.current.style.display = "flex";
    } else {
      noresult2.current.style.display = "none";
    }
  }

  function onkeysearch(e) {
    if (e.key === "Enter") {
      console.log(filteredProducts);
    }
  }

  const count = useSelector(
    (state) => Object.values(state.cart.value).filter((item) => item > 0).length
  );

  const getcurrentuser = async () => {
    try {
      const user = await axiosInstance.get("/user/currentuserlogin");
      console.log(user.data.message);
      const val = user.data.message;
      dispatch(userdata(val));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getcurrentuser();
    }
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-wrap">
          <Link to="/">
            {" "}
            <h1 className="heading-main">H.RAHIM&CO.</h1>
          </Link>
        </div>
        <div className="header-mid-part">
          <div className="search-bar-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Search for products"
              onChange={searchfield}
              onKeyDown={onkeysearch}
            />
            <i class="fa-solid fa-magnifying-glass searchone"></i>

            <div className="search-ul-li" ref={searchit}>
              <ul className="search-ul" ref={searchitul}>
                {filteredProducts.map((data) => (
                  <Link to={`/product-detail/${data._id}`}>
                    <li className="search-li">
                      <SearchItems data={data} />
                    </li>
                  </Link>
                ))}
              </ul>
              <h2 className="noresult" ref={noresult}>
                no results found
              </h2>
            </div>
          </div>
        </div>

        <div className="icons_div">
          {user ? (
            <Link to="/my-orders">
              <p className="my_orders">My Orders</p>
            </Link>
          ) : null}
          <div className={`${user ? "yes" : ""}`}>
            <div className="main_login1">
              {" "}
              <Link to="/log">
                {" "}
                <div className="login_div">
                  <h4 className="login">Login/register</h4>
                </div>
              </Link>
            </div>

            <div className="main-login2">
              {" "}
              <Link to="/log">
                {" "}
                <div className="login_div2">
                  <i class="fa-regular fa-user"></i>
                </div>
              </Link>
            </div>
          </div>
          {user ? <UserData /> : null}
          <div className="cart-div">
            <Link to="/addtocart">
              <h1 className="cart-number">{count}</h1>
            </Link>
            <Link to="/addtocart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="header2">
        <div className="search-bar2-main-div">
          {" "}
          <input
            className="search-bar2"
            type="text"
            placeholder="Search for products"
            onChange={searchfield2}
          />
          <i class="fa-solid fa-magnifying-glass searchIcon2"></i>
          <div className="search-ul-li2" ref={searchit2}>
            <ul className="search-ul2">
              {filteredProducts2.map((data) => (
                <Link to={`/product-detail/${data._id}`}>
                  <li className="search-li2">
                    <SearchItem2 data={data} />
                  </li>
                </Link>
              ))}
            </ul>
            <h1 className="noresult" ref={noresult2}>
              no results found
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
