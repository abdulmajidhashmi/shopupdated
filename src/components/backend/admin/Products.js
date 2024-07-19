import './Products.css'
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card'
import { axiosInstance } from '../axiosInstance';
const Products = () => {

  const nameRef = useRef();
  const priceRef = useRef();
  const mrpRef = useRef();
  const weightRef = useRef();
  const imageRef = useRef();

  const [product, setProduct] = useState([]);
  const [flag,setflag]=useState(false);

  function submitted(event) {

    if (nameRef.current.value && priceRef.current.value && mrpRef.current.value && weightRef.current.value && imageRef.current.value) {

      const productobj = {

        name: nameRef.current.value,
        price: priceRef.current.value,
        mrp: mrpRef.current.value,
        weight: weightRef.current.value,
        image: imageRef.current.value
      }

      console.log(productobj)
      nameRef.current.value = "";
      priceRef.current.value = "";
      mrpRef.current.value = "";
      weightRef.current.value = "";
      imageRef.current.value = "";


      axiosInstance.post('/productcreate', productobj)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
setflag(false);
  }

  const getproducts = async () => {

    await axiosInstance.get('/productcreate')
      .then((data) => {
        console.log(data.data);
        setProduct(data.data);
      })
      .catch((err) => {

        console.log(err);
      })
  }

  useEffect(() => {
    getproducts();

  }, [])

  const cancel=()=>{
    setflag(false);

  }

  const confirm=()=>{

    setflag(true);
  }

  return (

    <>
      {/* <h1>Add a product </h1>
      <div className='addproductdiv'>
        <label for="prodname">Name</label><input ref={nameRef} placeholder='Enter product Name' id="prodname" className="adddetails" type="text" />
        <label for="prodprice">price</label><input ref={priceRef} placeholder='Enter product price' id="prodprice" className="adddetails" type="number" />
        <label for="prodmrp">mrp</label><input ref={mrpRef} placeholder='Enter product mrp' id="prodmrp" className="adddetails" type="number" />
        <label for="prodweight">weight</label><input ref={weightRef} placeholder='Enter product weight' id="prodweight" className="adddetails" type="text" />
        <label for="prodimage">image url</label><input ref={imageRef} placeholder='Enter product image url' id="prodimage" className="adddetails" type="text" />
        <button className='sub' onClick={submitted}>submit</button>
      </div> */}

{flag?<div  class="fixed flex items-center justify-center w-full h-full">
<div class="bg-white max-w-sm mx-auto my-2 shadow-[0_3px_16px_-4px_rgba(197,182,255)] rounded-xl font-[sans-serif]" role="alert">
      <div class="px-6 py-8 text-center">
        <p class="block sm:inline text-sm text-gray-800"> Confirm, you want to add a product</p>
      </div>

      <div class="grid grid-cols-2 divide-x border-t">
        <button class="p-4 text-blue-600 text-sm hover:bg-blue-50" onClick={submitted}>Ok</button>
        <button class="p-4 text-blue-600 text-sm hover:bg-red-50" onClick={cancel}>Cancel</button>
      </div>
    </div>
    </div>:null}



      <div class="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
        <h1 class="text-3xl text-gray-800 font-extrabold text-center">Add Product</h1>
        <form class="mt-8 space-y-4">
          <input type='text' ref={nameRef} placeholder='Enter product Name'
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
          <input type='number' ref={priceRef} placeholder='Enter product price'
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
          <input type='number' ref={mrpRef} placeholder='Enter product mrp'
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
          <input type='text' ref={weightRef} placeholder='Enter product weight'
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
          <textarea ref={imageRef} placeholder='Enter product image url' rows="6"
            class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
          <button type='button' 
            class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full" onClick={confirm}>Send</button>
        </form>
      </div>




      <div>


        <div class="font-[sans-serif] overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 whitespace-nowrap">
              <tr>
                <th class="p-4 text-left text-sm font-medium text-white">
                  Product Image
                </th>
                <th class="p-4 text-left text-sm font-medium text-white">
                  Product Name
                </th>
                <th class="p-4 text-left text-sm font-medium text-white">
                  Price
                </th>
                <th class="p-4 text-left text-sm font-medium text-white">
                  MRP
                </th>
                <th class="p-4 text-left text-sm font-medium text-white">
                  Weight
                </th>
                <th class="p-4 text-left text-sm font-medium text-white">
                  Actions
                </th>
              </tr>
            </thead>




            <tbody class="whitespace-nowrap">


              {product.map((prod) => (
                <Card data={prod} />
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}


export default Products;