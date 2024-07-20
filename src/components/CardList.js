// import ProductCard from "./Card";
// import { useState, useEffect, useContext } from "react";
// import './Main.css'
// import './CardList.css';
// import kimia from "./../images/kimia.jpeg"
// import Pagination from "./Pagination";
// import { addtocartcontext } from './../context/Addtocartcontext';

// const productData = [{
//     id: 1,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 2,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 3,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 4,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 5,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 6,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 7,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 8,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 9,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 10,
//     page: 1,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 11,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 12,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 13,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 14,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 15,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 16,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },
// {
//     id: 17,
//     page: 2,
//     totalpages: 2,
//     image: `${kimia}`,
//     productTitle: "kimia",
//     rate: "150",
//     mrp: "500",
//     weight: "500g",
// },]


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

const productData = [{
    id:1 ,
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


const ProductList = ({ cartlength }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [currentData, setCurrentData] = useState([]);

    const addtocartusecontext = useContext(addtocartcontext);
    const { addtocart } = addtocartusecontext;

    useEffect(() => {
        cartlength(Object.keys(addtocart).length);
    }, [addtocart, cartlength]);

    useEffect(() => {
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        setCurrentData(productData.slice(indexOfFirstData, indexOfLastData));
    }, [currentPage, dataPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='card-container'>
                {currentData.map((prod) => (
                    <ProductCard key={prod.id} pro={prod} />
                ))}
            </div>
            <Pagination 
                dataPerPage={dataPerPage} 
                totalData={productData.length} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </>
    );
};

export default ProductList;
