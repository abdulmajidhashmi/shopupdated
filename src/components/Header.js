import './Main.css';
import './Header.css';
import Login from './Login.js';
import { useEffect, useState } from 'react';
import kimia from './../images/kimia.jpeg';
import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addtocartcontext } from './../context/Addtocartcontext'
import SearchItems from './SearchItems.js';
import UserData from './UserData.js';
import { axiosInstance } from './backend/axiosInstance';
import { setToken, userdata } from "./reducers/user.reducer";
import { useNavigate } from 'react-router-dom';

const productData = [{
    id: 1,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 2,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 3,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 4,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 5,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 6,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 7,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 8,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 9,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 10,
    page: 1,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 11,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 12,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 13,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 14,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 15,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 16,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 17,
    page: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},]


const Header = ({ props }) => {

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
        const filteredProducts = productData.filter(prod => prod.productTitle.toLowerCase().includes(searchString));
        setFilteredProducts(filteredProducts); // Update the state with filtered products

        if (searchString === "") {
            searchit.current.style.display = "none";
            searchitul.current.style.display = "block";


        }
        else {
            searchit.current.style.display = "flex";
            searchitul.current.style.display = "none";

        }

        if (filteredProducts.length === 0) {
            noresult.current.style.display = "flex";
            searchitul.current.style.display = "none";

        } else {
            noresult.current.style.display = "none"
            searchitul.current.style.display = "block";

        }
    }


    function searchfield2(e) {
        const searchString2 = e.target.value.toLowerCase();
        const filteredProducts2 = productData.filter(prod => prod.productTitle.toLowerCase().includes(searchString2));
        setFilteredProducts2(filteredProducts2); // Update the state with filtered products
        if (searchString2 === "") {
            searchit2.current.style.display = "none";
        }
        else {
            searchit2.current.style.display = "flex";
        }

        if (filteredProducts2.length === 0) {
            noresult2.current.style.display = "flex";
        } else {
            noresult2.current.style.display = "none"
        }
    }


    function onkeysearch(e) {


        if (e.key === 'Enter') {
            console.log(filteredProducts);


        }
    }


    const count = useSelector((state) => state.addToCart.value.filter(item => item > 0).length);

    const getcurrentuser = async () => {
        try {
            const user = await axiosInstance.get('/user/currentuserlogin',)
            console.log(user.data.message);
            const val = user.data.message;
            dispatch(userdata(val));




        }
        catch (err) {

            console.log(err);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getcurrentuser();



        }



    }, [])


    return (
        <>

            <div className="header">

                <div className="header-wrap">
                    <Link to="/hrahim/"> <h1 className='heading-main'>H.RAHIM&CO.</h1></Link>

                </div>
                <div className='header-mid-part'>
                    <div className='search-bar-container'>
                        <input className='search-bar' type="text" placeholder='Search for products' onChange={searchfield} onKeyDown={onkeysearch} />
                        <i class="fa-solid fa-magnifying-glass"></i>

                        <div className='search-ul-li' ref={searchit}>

                            <ul className='search-ul' ref={searchitul}>
                                {
                                    filteredProducts.map(data => (

                                        <Link to={`/hrahim/product-detail/${data.id}`} ><li className='search-li'>
                                            <SearchItems data={data} />
                                        </li>
                                        </Link>
                                    ))
                                }



                            </ul>
                            <h2 className="noresult" ref={noresult}>no results found</h2>
                        </div>
                    </div>


                </div>

                <div className='icons_div'>
                    {user ?
                        <Link to="/hrahim/my-orders"><p className='my_orders'>My Orders</p></Link> : null}
                    <div className={`${user ? "yes" : ""}`}>
                        <div className='main_login1'> <Link to="/hrahim/login"> <div className="login_div"><h4 className="login" >Login/register</h4></div></Link></div>

                        <div className='main-login2'> <Link to="/hrahim/login"> <div className="login_div2"><i class="fa-regular fa-user" ></i></div></Link></div>
                    </div>
                    {user ? <UserData /> : null}
                    <div className='cart-div'>
                        <Link to="/hrahim/addtocart">

                            <h1 className='cart-number'>{count}</h1>
                        </Link>
                        <Link to="/hrahim/addtocart"><i className="fa-solid fa-cart-shopping"></i></Link>



                    </div>

                </div>


            </div>

            <div className='header2'>
                <div className='search-bar2-main-div'> <input className='search-bar2' type="text" placeholder='Search for products' onChange={searchfield2} />
                    <i class="fa-solid fa-magnifying-glass searchIcon2"></i>
                    <div className='search-ul-li2' ref={searchit2}>

                        <ul>
                            {
                                filteredProducts2.map(data => (

                                    <Link to={`/hrahim/product-detail/${data.id}`} ><li className='search-li'><h1>{data.productTitle}</h1></li>
                                    </Link>
                                ))
                            }



                        </ul>
                        <h1 className="noresult" ref={noresult2}>no results found</h1>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Header;