import './TotalAmount.css'
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from './backend/axiosInstance';
import { useEffect,useState } from 'react';
import { calculatetotal } from './reducers/addToCart.reducer'
import { Link } from 'react-router-dom';


const TotalAmount = () => {

    const [productdata,setproductdata]=useState([]);

    const getproducts=async()=>{
try{
       const response= await axiosInstance.get('/productcreate/prod');
       const data=response.data.data;
       
       
        
        setproductdata(data);
       
        
    }
    catch(err){

        console.log(err);
    }

}

    useEffect(()=>{
        getproducts();
    },[])
    const count = useSelector((state) => state.cart.value);
    const totalamount = useSelector((state) => state.cart.total);



    const dispatch = useDispatch()

    


    const calculateTotal = () => {
        let total = 0;
        let mrptotal = 0;
        for (const proid in count) {
            const product = productdata.find((item) => item._id === proid);
            if (product) {
                total += product.price * count[proid];
                mrptotal += product.mrp * count[proid];
            }
        }
        console.log(total);
        return [total, mrptotal];

    };

    const [total, mrptotal] = calculateTotal();
    useEffect(() => {
        dispatch(calculatetotal(total));
    }, [total, dispatch])



    return (
        <>
            
                
                
                <div className="mb-2  flex justify-between">
                            <p class="text-gray-700">MRP Total</p>
                            <p class="text-gray-700">{mrptotal}</p>
                        </div>


                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Product Discount</p>
                            <p class="text-gray-700">₹{mrptotal - total}</p>
                        </div>

                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">FREE</p>
                        </div>


                        <hr class="my-4" />

                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">₹{totalamount} INR</p>
                            </div>
                        </div>

                       <Link to="/checkout"> <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                       </Link>

          
        </>
    )
}

export default TotalAmount;