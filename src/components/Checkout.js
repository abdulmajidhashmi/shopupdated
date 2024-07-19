// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { orderdata } from "./reducers/order.reducer";
// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "./backend/axiosInstance";

// const Checkout = () => {
//   const user = useSelector((state) => state.user.user);
//   const order = useSelector((state) => state.order.order);
//   const actualserverdata = useSelector((state) => state.order);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [Details, setDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     cash: "cash on delivery",
//   });

//   useEffect(() => {
//     if (user) {
//       setDetails({
//         firstName: user.name || "",
//         lastName: user.surname || "",
//         email: user.email || "",
//         phone: user.number || "",
//         street: user.address?.street || "",
//         city: user.address?.city || "",
//         state: user.address?.state || "",
//         zipCode: user.address?.zipCode || "",
//         cash: "cash on delivery",
//       });
//     }
    
//   }, [user]);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));

//     console.log(Details);
//     dispatch(
//       orderdata({
//         order: order, // assuming no orders for now, you can update this as needed
//         orderuserdetails: Details,
//       })
//     );
//   }
//   function confirmorder() {
//     console.log(actualserverdata);

//     axiosInstance
//       .post("/order/create", actualserverdata)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     navigate("/hrahim/my-orders");
//   }

//   return (
//     <>
//       <div className="font-sans bg-white p-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
//               Checkout
//             </h2>
//           </div>

//           <div className="mt-12">
//             {user ? null : (
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-300">01</h3>
//                   <h3 className="text-xl font-bold text-gray-800 mt-1">
//                     Personal Details
//                   </h3>
//                 </div>

//                 <div className="md:col-span-2">
//                   <form>
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <input
//                           name="firstName"
//                           onChange={handleChange}
//                           value={Details.firstName}
//                           type="text"
//                           placeholder="First name"
//                           className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                         />
//                       </div>
//                       <div>
//                         <input
//                           name="lastName"
//                           onChange={handleChange}
//                           value={Details.lastName}
//                           type="text"
//                           placeholder="Last name"
//                           className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                         />
//                       </div>
//                       <div>
//                         <input
//                           name="email"
//                           onChange={handleChange}
//                           value={Details.email}
//                           type="email"
//                           placeholder="Email address"
//                           className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                         />
//                       </div>
//                       <div>
//                         <input
//                           name="phone"
//                           onChange={handleChange}
//                           value={Details.phone}
//                           type="tel"
//                           placeholder="Phone number"
//                           className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                         />
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}

//             <div className="grid md:grid-cols-3 gap-4 mt-12">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-300">02</h3>
//                 <h3 className="text-xl font-bold text-gray-800 mt-1">
//                   Shopping Address
//                 </h3>
//               </div>

//               <div className="md:col-span-2">
//                 <form>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <input
//                         name="street"
//                         onChange={handleChange}
//                         value={Details.street}
//                         type="text"
//                         placeholder="Street address"
//                         className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         name="city"
//                         onChange={handleChange}
//                         value={Details.city}
//                         type="text"
//                         placeholder="City"
//                         className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         name="state"
//                         onChange={handleChange}
//                         value={Details.state}
//                         type="text"
//                         placeholder="State"
//                         className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         name="zipCode"
//                         onChange={handleChange}
//                         value={Details.zipCode}
//                         type="text"
//                         placeholder="Zip Code"
//                         className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
//                       />
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div>
//               <input type="checkbox" checked />
//               <label className="text-xl font-bold text-gray-800 mt-1">
//                 Cash on Delivery
//               </label>
//             </div>

//             <div className="flex flex-wrap justify-end gap-4 mt-12">
//               {/* <button type="button" className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">Pay later</button> */}
//               <button
//                 type="button"
//                 onClick={confirmorder}
//                 className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 Place Order now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkout;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderdata } from "./reducers/order.reducer";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./backend/axiosInstance";

const Checkout = () => {
    const user = useSelector((state) => state.user.user);
    const order = useSelector((state) => state.order.order);
    const actualserverdata = useSelector((state) => state.order);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        cash: 'cash on delivery'
    });

    useEffect(() => {
        if (user) {
            setDetails({
                firstName: user.name || '',
                lastName: user.surname || '',
                email: user.email || '',
                phone: user.number || '',
                street: user.address?.street || '',
                city: user.address?.city || '',
                state: user.address?.state || '',
                zipCode: user.address?.zipCode || '',
                cash: 'cash on delivery'
            });
        }
    }, [user]);

    function handleChange(event) {
        const { name, value } = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));

        dispatch(orderdata({
            order: order, // assuming no orders for now, you can update this as needed
            orderuserdetails: {
                ...Details,
                [name]: value
            }
        }));
    }

    function confirmorder() {
        console.log(actualserverdata);
        axiosInstance.post("/order/create", actualserverdata)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
        navigate('/hrahim/my-orders');
    }

    return (
        <>
            <div className="font-sans bg-white p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
                    </div>

                    <div className="mt-12">
                        {user ? null : (
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-300">01</h3>
                                    <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
                                </div>

                                <div className="md:col-span-2">
                                    <form>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    value={Details.firstName}
                                                    type="text"
                                                    placeholder="First name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    value={Details.lastName}
                                                    type="text"
                                                    placeholder="Last name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={Details.email}
                                                    type="email"
                                                    placeholder="Email address"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    name="phone"
                                                    onChange={handleChange}
                                                    value={Details.phone}
                                                    type="tel"
                                                    placeholder="Phone number"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-4 mt-12">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-300">02</h3>
                                <h3 className="text-xl font-bold text-gray-800 mt-1">Shopping Address</h3>
                            </div>

                            <div className="md:col-span-2">
                                <form>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                name="street"
                                                onChange={handleChange}
                                                value={Details.street}
                                                type="text"
                                                placeholder="Street address"
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="city"
                                                onChange={handleChange}
                                                value={Details.city}
                                                type="text"
                                                placeholder="City"
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="state"
                                                onChange={handleChange}
                                                value={Details.state}
                                                type="text"
                                                placeholder="State"
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="zipCode"
                                                onChange={handleChange}
                                                value={Details.zipCode}
                                                type="text"
                                                placeholder="Zip Code"
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" checked />
                            <label className="text-xl font-bold text-gray-800 mt-1">Cash on Delivery</label>
                        </div>

                        <div className="flex flex-wrap justify-end gap-4 mt-12">
                            {/* <button type="button" className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">Pay later</button> */}
                            <button type="button" onClick={confirmorder} className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Place Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
