import './TotalAmount.css'
import { useDispatch, useSelector } from 'react-redux';
import kimia from './../images/kimia.jpeg'
import { useEffect } from 'react';
import { calculatetotal } from './reducers/addToCart.reducer'
import { Link } from 'react-router-dom';


const productData = [{
    id: 1,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 2,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 3,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 4,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 5,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 6,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 7,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 8,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 9,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 10,
    page: 1,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 11,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 12,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 13,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 14,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 15,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 16,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 17,
    page: 2,
    totalpages: 2,
    image: `${kimia}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},]
const TotalAmount = () => {


    const count = useSelector((state) => state.addToCart.value);
    const totalamount = useSelector((state) => state.addToCart.total);



    const dispatch = useDispatch()

    


    const calculateTotal = () => {
        let total = 0;
        let mrptotal = 0;
        for (const proid in count) {
            const product = productData.find((item) => item.id === parseInt(proid));
            if (product) {
                total += product.rate * count[proid];
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
            
                
                
                <div class="mb-2 flex justify-between">
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

                       <Link to="/hrahim/checkout"> <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                       </Link>

          
        </>
    )
}

export default TotalAmount;