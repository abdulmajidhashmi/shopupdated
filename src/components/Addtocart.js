import { useState, useContext, useEffect } from 'react';
import kimia from './../images/kimia.jpeg';
import { addtocartcontext } from '../context/Addtocartcontext';
import './Addtocart.css';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCart, decreaseCart,removecart } from './reducers/addToCart.reducer'
import TotalAmount from './TotalAmount';
import { orderdata } from './reducers/order.reducer';
import { axiosInstance } from './backend/axiosInstance';




const Addtocart = () => {

    const [productdata,setproductdata] =useState([]);


    const getproduct= async ()=>{
try{

    const response = await axiosInstance.get('/productcreate/prod');
    setproductdata(response.data.data);


}catch(err){

    console.log(err);
}

    }

    useEffect(()=>{

        getproduct();
        console.log(count);
    },[])

    const count = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const hi = useSelector((state)=> state.order.order);

    const [cartData, setCartData] = useState({ items: [], totalPrice: 0 });



    const addtocartdata = productdata.filter(prod => count[prod._id]);

    function addbutton(event) {
        dispatch(increaseCart({ proid: event }));

    }
    function removebutton(event) {
        dispatch(decreaseCart({ proid: event }))

    }
    function removeproduct(event){
       
        dispatch(removecart({proid:event}))
    }
    useEffect(() => {
        const items = addtocartdata.map(prod => ({
            id: prod._id,
            title: prod.name,
            price: prod.price,
            quantity: count[prod._id],
            total: count[prod._id] * prod.price
        }));

        const totalPrice = items.reduce((sum, item) => sum + item.total, 0);

        setCartData({ items, totalPrice });
        console.log({ items, totalPrice });
        // dispatch(orderdata(cartData));
        

        dispatch(orderdata({
            order: { items, totalPrice }, // assuming no orders for now, you can update this as needed
            orderuserdetails: {}
          }));

        
    }, [count]);

    return (
        <>

            <div className="h-screen bg-gray-100 pt-20">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>


                <div className='main-div-addtocart  mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
                    <div className='cart-main-div  rounded-lg md:w-2/3'>

                        {addtocartdata.length === 0 ? (<h1 className='cart_empty text-center mx-auto mt-10'>your cart is empty</h1>) : (<ul className='ul-addtocart'> {addtocartdata.map(prod => (
                            <li className='li-addtocart justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>

                                <img className="li-image  w-full rounded-lg sm:w-40" src={prod.image1}></img>
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">



                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900">{prod.name}</h2>
                                        <p class="mt-1 text-xs text-gray-700"></p>
                                    </div>

                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                                        <div className={` flex items-center border-gray-100 `}>

                                        {/* ${count[prod.id] === undefined ? 'counter-disable' : ''} */}
                                            <span className="  cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => removebutton(prod._id)}>-</span>
                                            
                                            

                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="telephone" value={count[prod._id]} min="1" />

                                            <span className="  cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => addbutton(prod._id)} >+</span>


                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <p class="text-sm">₹{count[prod._id]*prod.price}</p>
                                        <svg onClick={()=>removeproduct(prod._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>

                                    </div>

                                </div>
                            </li>
                        ))}
                        </ul>

                        )}



                    </div>
                    {addtocartdata.length === 0 ?null:(
                    <div className='total-amount  mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
                        <TotalAmount />
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Addtocart;