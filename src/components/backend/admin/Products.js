import "./Products.css";
import "./Allimagesshow.css";
import { useRef, useState, useEffect } from "react";
import Card from "../Card";
import { axiosInstance } from "../axiosInstance";
import Allimagesshow from "./Allimagesshow";
const Products = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const mrpRef = useRef();
  const weightRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const descriptionRef = useRef();

  const [product, setProduct] = useState([]);
  const [flag, setflag] = useState(false);
  const [deleteflag,setdeleteflag]=useState(false);
  const [message, setmessage] = useState("");
  const [edit, setedit] = useState(false);
  const [deldata,setdeldata]=useState();
  const [refresh,setrefresh]=useState(false);
  const initialvalues = {
    name: "",
    price: "",
    mrp: "",
    weight: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    description: "",
    id:""
  };
  const [editvalue, seteditvalue] = useState(initialvalues);
  
  const [editchanges, seteditchanges] = useState(initialvalues);

  function submitted(event) {
    if (
      nameRef.current.value &&
      priceRef.current.value &&
      mrpRef.current.value &&
      weightRef.current.value &&
      image1Ref.current.value &&
      image2Ref.current.value &&
      image3Ref.current.value &&
      image4Ref.current.value &&
      descriptionRef.current.value
    ) {
      const productobj = {
        name: nameRef.current.value,
        price: priceRef.current.value,
        mrp: mrpRef.current.value,
        weight: weightRef.current.value,
        description: descriptionRef.current.value,
        image1: image1Ref.current.value,
        image2: image2Ref.current.value,
        image3: image3Ref.current.value,
        image4: image4Ref.current.value,
      };

      console.log(productobj);

      axiosInstance
        .post("/productcreate", productobj)
        .then(function (response) {
          console.log(response.data);

          setmessage(response.data);

          if (response.data) {
            nameRef.current.value = "";
            priceRef.current.value = "";
            mrpRef.current.value = "";
            weightRef.current.value = "";
            image1Ref.current.value = "";
            image2Ref.current.value = "";
            image3Ref.current.value = "";
            image4Ref.current.value = "";
            descriptionRef.current.value = "";
          }

          setrefresh(!refresh);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setflag(false);
  }

  const getproducts = async () => {
    await axiosInstance
      .get("/productcreate")
      .then((data) => {
        console.log(data.data);
        seteditvalue(data.data);
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getproducts();
  }, [refresh]);

  const cancel = () => {
    setflag(false);
    setdeleteflag(false);
  };

  const confirm = () => {
    setflag(true);
  };

  const [imageflag, setimageflag] = useState(false);

  function showallimages(event) {
    setimageflag(!imageflag);
    console.log("hi");
  }

  function openEditBox(value) {
    setedit((edit) => !edit);
    seteditvalue(value);
    seteditchanges(value);
  }
  const [productflag, setproductflag] = useState(null);

  const handleImageClick = (prod) => {
    setproductflag(prod);
  };

  function wrong(event) {
    setproductflag(false);
  }
  function editchange(event) {
    const { name, value } = event.target;
    seteditchanges({ ...editchanges, [name]: value });
  }

  const doneedit = async () => {
 console.log(editchanges);
    try {
      const response = await axiosInstance.put("/productcreate/edit", editchanges);
      setedit(false);
      console.log(response.data.message);
      setrefresh(!refresh);
    } catch (err) {
      console.log("error");
    }
  };

  function deleteconfirm(value){
    setdeldata(value);
      setdeleteflag(true);
      
  }

  const deleteprod=async()=>{
    console.log(deldata);
    try{
    const response=await axiosInstance.delete('/productcreate/delete',{data:{_id:deldata._id}});
        console.log(response.data);
        setdeleteflag(false);
        setrefresh(!refresh);
    }catch(err){

      console.log(err.data);
    }

    


  }
  return (
    <>

{deleteflag ? (
        <div class="fixed flex items-center justify-center w-full h-full">
          <div
            class="bg-white max-w-sm mx-auto my-2 shadow-[0_3px_16px_-4px_rgba(197,182,255)] rounded-xl font-[sans-serif]"
            role="alert"
          >
            <div class="px-6 py-8 text-center">
              <p class="block sm:inline text-sm text-gray-800">
                {/* {" "} */}
                Confirm, you want to delete this product
              </p>
            </div>

            <div class="grid grid-cols-2 divide-x border-t">
              <button
                class="p-4 text-blue-600 text-sm hover:bg-blue-50"
                onClick={deleteprod}
              >
                Ok
              </button>
              <button
                class="p-4 text-blue-600 text-sm hover:bg-red-50"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}


      {edit ? (
        <div className="edit_dialog_box">
          <input
            className="dialog_input"
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={editchange}
            value={editchanges.name}
          />
          <input
            className="dialog_input"
            type="number"
            placeholder="enter price"
            name="price"
            onChange={editchange}
            value={editchanges.price}
          />
          <input
            className="dialog_input"
            type="number"
            placeholder="enter mrp"
            name="mrp"
            onChange={editchange}
            value={editchanges.mrp}
          />
          <input
            className="dialog_input"
            type="text"
            placeholder="enter weight"
            name="weight"
            onChange={editchange}
            value={editchanges.weight}
          />
          <input
            className="dialog_input"
            type="text"
            placeholder="image1 url"
            name="image1"
            onChange={editchange}
            value={editchanges.image1}
          />
          <input
            className="dialog_input"
            type="text"
            placeholder="image2 url"
            name="image2"
            onChange={editchange}
            value={editchanges.image2}
          />
          <input
            className="dialog_input"
            type="text"
            placeholder="image3 url"
            name="image3"
            onChange={editchange}
            value={editchanges.image3}
          />
          <input
            className="dialog_input"
            type="text"
            placeholder="image4 url"
            name="image4"
            onChange={editchange}
            value={editchanges.image4}
          />
          <input
            type="text"
            className="dialog_input textarea"
            placeholder="description"
            name="description"
            onChange={editchange}
            value={editchanges.description}
          />
          <button className="submit_done" onClick={doneedit}>
            done
          </button>
        </div>
      ) : null}

      {/* {productflag?<Allimagesshow data={productflag}/>:null} */}

      {productflag ? (
        <div className="allimages_div">
          <div className="allimages_div2">
            <i class="fa-solid fa-xmark wrong" onClick={wrong}></i>
            <div className="images_column">
              <img className="hover_image" src={productflag.image1} />
              <img className="hover_image" src={productflag.image2} />
              <img className="hover_image" src={productflag.image3} />
              <img className="hover_image" src={productflag.image4} />
            </div>
          </div>
        </div>
      ) : null}

      {flag ? (
        <div class="fixed flex items-center justify-center w-full h-full">
          <div
            class="bg-white max-w-sm mx-auto my-2 shadow-[0_3px_16px_-4px_rgba(197,182,255)] rounded-xl font-[sans-serif]"
            role="alert"
          >
            <div class="px-6 py-8 text-center">
              <p class="block sm:inline text-sm text-gray-800">
                {/* {" "} */}
                Confirm, you want to add a product
              </p>
            </div>

            <div class="grid grid-cols-2 divide-x border-t">
              <button
                class="p-4 text-blue-600 text-sm hover:bg-blue-50"
                onClick={submitted}
              >
                Ok
              </button>
              <button
                class="p-4 text-blue-600 text-sm hover:bg-red-50"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div class="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
        <h1 class="text-3xl text-gray-800 font-extrabold text-center">
          Add Product
        </h1>
        <form class="mt-8 space-y-4">
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter product Name"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />

          <input
            type="number"
            ref={priceRef}
            placeholder="Enter product price"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="number"
            ref={mrpRef}
            placeholder="Enter product mrp"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="text"
            ref={weightRef}
            placeholder="Enter product weight"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <textarea
            ref={descriptionRef}
            placeholder="Enter product Description"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="text"
            ref={image1Ref}
            placeholder="Enter product image url 1"
            class="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          />
          <input
            type="text"
            ref={image2Ref}
            placeholder="Enter product image url 2"
            class="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          />
          <input
            type="text"
            ref={image3Ref}
            placeholder="Enter product image url 3"
            class="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          />
          <input
            type="text"
            ref={image4Ref}
            placeholder="Enter product image url 4"
            class="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          />

          <button
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            onClick={confirm}
          >
            Send
          </button>
          <h1>{message}</h1>
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
              {product.map((data) => (
                <>
                  {/* <div className='table_div'>
                 <img className="margin" src={data.image}/>
                 <h1 className="margin gr">{data.name}</h1>
                 <p className="margin">{data.price}</p>
                 <p className="margin">{data.mrp}</p>
                 <p className="margin">{data.weight}</p>
                 </div> */}

                  <tr class="even:bg-blue-50">
                    <td class="p-4 text-sm text-black">
                      <img
                        className="margin"
                        src={data.image1}
                        alt="image"
                        key={data.id}
                        onClick={() => handleImageClick(data)}
                      />
                    </td>
                    <td class="p-4 text-sm text-black">{data.name}</td>
                    <td class="p-4 text-sm text-black">{data.price}</td>
                    <td class="p-4 text-sm text-black">{data.mrp}</td>
                    <td class="p-4 text-sm text-black">{data.weight}</td>
                    <td class="p-4">
                      <button
                        onClick={() => openEditBox(data)}
                        class="mr-4"
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 fill-blue-500 hover:fill-blue-700"
                          viewBox="0 0 348.882 348.882"
                        >
                          <path
                            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                            data-original="#000000"
                          />
                          <path
                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      <button onClick={()=>deleteconfirm(data)} class="mr-4" title="Delete">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 fill-red-500 hover:fill-red-700"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
