import { useEffect, useState } from "react";

const ClientOrder = ({data}) => {


const [totalvalue,settotalvalue] =useState(0);
   useEffect(()=>{

    console.log(data.order.items);
    
    if (data && data.order && data.order.items) {
        const totalSum = data.order.items.reduce((sum, item) => sum + item.total, 0);
        settotalvalue(totalSum);
    }

   

    

    

  

   },[data])
    
    return (

        <>

{data?(
            <div class="mt-7 border border-gray-300 pt-4">
                <div class="flex max-md:flex-col items-center justify-between px-3 md:px-11">
                    <div class="data">
                        <p class="font-medium text-lg leading-8 text-black whitespace-nowrap">Order ID : {(data._id).toUpperCase()}</p>
                        <p class="font-medium text-lg leading-8 text-black mt-3 whitespace-nowrap">Order Date :{(`${data.createdAt}`).substring(0,10)}</p>
                    </div>
                    <div class="flex items-center gap-3 max-md:mt-5">
                        <button
                            class="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-400">Show
                            Invoice</button>
                        <button
                            class="rounded-full px-7 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">Buy
                            Now</button>

                    </div>
                </div>
                <svg class="my-4 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                    fill="none">
                    <path d="M0 1H1216" stroke="#D1D5DB" />
                </svg>

{data.order.items.map(dat=>(


<><div class="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
                    <div class="grid grid-cols-4 w-full">
                        <div class="col-span-4 sm:col-span-1">
                            {/* <img src="https://pagedone.io/asset/uploads/1705474774.png" alt="" class="max-sm:mx-auto" /> */}
                        </div>
                        <div
                            class="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                            <h6 class="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                                {dat.title}</h6>
                            <p class="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">By: Dust
                                Studios</p>
                            <div class="flex items-center max-sm:flex-col gap-x-8 gap-y-3">
                                <span class="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">Size:
                                    s</span>
                                <span class="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">Qty:
                                    {dat.quantity}</span>
                                <p class="font-semibold text-xl leading-8 text-black whitespace-nowrap">Price ₹{dat.total}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                        <div class="flex flex-col justify-center items-start max-sm:items-center">
                            <p class="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                Status</p>
                          {data.deliverystatus==="pending"?<p class="font-semibold text-lg leading-8 text-red-500 text-left whitespace-nowrap">
                                {data.deliverystatus}</p>:<p class="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                                {data.deliverystatus}</p>}  
                        </div>
                        <div class="flex flex-col justify-center items-start max-sm:items-center">
                            <p class="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                Delivery Expected by</p>
                            <p class="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">23rd March
                                2021</p>
                        </div>
                    </div>

                </div>

                <svg class="my-4 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                    fill="none">
                    <path d="M0 1H1216" stroke="#D1D5DB" />
                </svg>
                </>

))}
                

                
                <div class="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
                    <div class="flex max-sm:flex-col-reverse items-center">
                        <button
                            class="flex items-center gap-3 py-2 pr-8 sm:border-r border-gray-300 font-normal text-xl leading-8 text-gray-500 group transition-all duration-500 hover:text-indigo-600">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-gray-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                    d="M14.0261 14.7259L25.5755 26.2753M14.0261 26.2753L25.5755 14.7259" stroke=""
                                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            cancel order
                        </button>
                        <p class="font-normal text-xl leading-8 text-gray-500 sm:pl-8">Payment Is Succesfull</p>
                    </div>
                    <p class="font-medium text-xl leading-8 text-black max-sm:py-4"> <span class="text-gray-500">Total
                        Price: </span> &nbsp;₹{totalvalue}</p>
                </div>
            </div>):(<h1>No Orders Yet</h1>)}

        </>
    )
}

export default ClientOrder;