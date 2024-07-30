import ProductCard from "./Card";
import { useState, useEffect } from "react";
import { axiosInstance } from "./backend/axiosInstance";
import './Main.css'
import './MadinaCardlist.css';
import sukkary from './../images/sukkary.jpg'



const MadinaCardlist = () => {


    const [productdata,setproductdata]=useState([]);

    const getproducts=async()=>{
try{
       const response= await axiosInstance.get('/productcreate/prod');
       const data=response.data.data;
       
       
        if(data){
        const res =data.filter(prod=> prod.category.toLowerCase().includes("madina"));
        setproductdata(res);
       
        }
    }
    catch(err){

        console.log(err);
    }

}

    useEffect(()=>{
        getproducts();
    },[])


    


    return (

        <div className='card-container'>
            {
                productdata.map(prod => (

                    <ProductCard pro={prod} />
                ))
            }



        </div>
    );
}

export default MadinaCardlist;