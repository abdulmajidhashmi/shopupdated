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
import kimia from "./../images/kimia.jpeg";
import './Main.css';
import './CardList.css';
import { axiosInstance } from "./backend/axiosInstance";
import CardshimmeringEffect from "./CardshimmeringEffect";




const ProductList = ({ cartlength }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [currentData, setCurrentData] = useState([]);
    const [loading,setloading]=useState(false);
    const initialvalues=[1,2,3,4,5,6];
    const [arr,setarr]=useState(initialvalues);

    const addtocartusecontext = useContext(addtocartcontext);
    const { addtocart } = addtocartusecontext;
    const [productdata,setproductdata]=useState([]);

    const getproducts=async()=>{
try{
       const response= await axiosInstance.get('/productcreate/prod');
       const data=response.data.data;
       
       
        if(data){
        const res =data.filter(prod=> prod.category.toLowerCase().includes("dates"));
        setproductdata(res);
        setloading(false);
       
        }
    }
    catch(err){

        console.log(err);
        setloading(false);
    }

}

    useEffect(()=>{
        setloading(true);
        getproducts();
    },[])

    useEffect(() => {
        cartlength(Object.keys(addtocart).length);
    }, [addtocart, cartlength]);

    useEffect(() => {
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        setCurrentData(productdata.slice(indexOfFirstData, indexOfLastData));
    }, [currentPage, dataPerPage,productdata]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    

    return (
        <><div className='card-containers'>{loading?(arr.map(()=>(<CardshimmeringEffect/>))):(<><div className='card-container'>
        {currentData.map((prod) => (
            <ProductCard key={prod._id} pro={prod} />
        ))}
    </div>
  <Pagination 
        dataPerPage={dataPerPage} 
        totalData={productdata.length} 
        paginate={paginate} 
        currentPage={currentPage}
    /> </>) }
            </div>
        </>
    );
};

export default ProductList;
