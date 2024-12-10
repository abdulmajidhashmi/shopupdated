// import ProductCard from "./Card";
// import { useState, useEffect, useContext } from "react";
// import './Main.css'
// import './CardList.css';
// import kimia from "./../images/kimia.jpeg"
// import Pagination from "./Pagination";
// import { addtocartcontext } from './../context/Addtocartcontext';

// const ProductList = ({ cartlength }) => {

//     const [dat, setdat] = useState([]);

//     function call(pageno) {

//         const datas = productData.filter(produ => produ.page === pageno);
//         setdat(datas)

//     }

//     useEffect(() => {
//         call(1);

//     }, [])

//     const array1 = productData[0];

//     const addtocartusecontext = useContext(addtocartcontext);
//     const { addtocart, setaddtocart } = addtocartusecontext;

//     console.log(addtocart);

//     useEffect(() => {
//         cartlength(Object.keys(addtocart).length);
//     }, [addtocart, cartlength]);

//     return (
//         <>
//             {/* <Header props={addtocart.length}/> */}
//             <div className='card-container'>
//                 {
//                     dat.map(prod => (

//                         <ProductCard pro={prod}  />
//                     ))
//                 }

//             </div>
//             <div>
//                 <Pagination part1={call} part2={array1} />
//             </div>
//         </>
//     );
// }

// export default ProductList;

import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./Card";
import Pagination from "./Pagination";
import { addtocartcontext } from "./../context/Addtocartcontext";
import "./Main.css";
import "./CardList.css";
import { axiosInstance } from "./backend/axiosInstance";
import CardshimmeringEffect from "./CardshimmeringEffect";
import Card2 from "./Card2";
import Card3 from "./Card3";

const ProductList = ({ cartlength }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setloading] = useState(false);
  const initialvalues = [1, 2, 3, 4, 5, 6];
  const [arr, setarr] = useState(initialvalues);
  const [totalPages,settotalPages] = useState(0);
  const [servererror,setservererror] = useState(false);

  const addtocartusecontext = useContext(addtocartcontext);
  const { addtocart } = addtocartusecontext;
  const [productdata, setproductdata] = useState([]);

  const getproducts = async (page) => {
    try {
      const response = await axiosInstance.get(`/productcreate/prod?page=${page}&limit=${dataPerPage}`);
      const data = response.data.data;
      const total = response.data.total;
    
console.log(data);
      if (data) {
        const res = data.filter((prod) =>
          prod.category.toLowerCase().includes("dates")
        );
      
        setproductdata(res);
        setservererror(false);
        console.log(productdata);
        console.log(res);
        settotalPages(Math.ceil(total/dataPerPage));
        window.scrollTo(0,0);
        
        // const stringify = JSON.stringify(res);
        // sessionStorage.setItem("products", stringify);
        setloading(false);
      }
    } catch (err) {
      console.log(err);
      settotalPages(-1);
      setloading(false);
      setservererror(true);
    }
  };

  useEffect(() => {
    // const sessiondata = sessionStorage.getItem("products");

    
    // if (sessiondata) {
    //   setproductdata(JSON.parse(sessiondata));
    // } else {}

    
      setloading(true);
      getproducts(currentPage);
    
      
    
  }, [currentPage]);

  useEffect(() => {
    cartlength(Object.keys(addtocart).length);
  }, [addtocart, cartlength,currentPage]);

  useEffect(() => {
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    setCurrentData(productdata.slice(indexOfFirstData, indexOfLastData));
    
  }, [currentPage, dataPerPage, productdata]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const retry = (event) =>{ 
    
    console.log("hi");
    
    setservererror(false);
    getproducts(1);
  }

  return (
    <>
      
      {servererror?<div className="retry_products"><h1  onClick={retry}>Retry</h1></div>:(<div className="card-containers">
        {loading ? (
          arr.map(() => <CardshimmeringEffect />)
        ) : (
          <>
            {/* <div className="card-container">
              {productdata.map((prod) => (
                <ProductCard key={prod._id} pro={prod} />
              ))}
            </div> */}


            {/* <div className="card-container">
              {productdata.map((prod) => (
                <Card2 key={prod._id} pro={prod} />
              ))}
            </div> */}

<div className="card-container">
              {productdata.map((prod) => (
                <Card3 key={prod._id} pro={prod} />
              ))}
            </div>


            <Pagination
              dataPerPage={dataPerPage}
              totalData={productdata.length}
              paginate={paginate}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}

        
      </div>)}
    </>
  );
};

export default ProductList;
